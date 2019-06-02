import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import {
  Input,
  Textbox,
  TextboxContainer,
  TextboxErrorContainer,
  TextboxMainContainer
} from "../";

describe("Textbox", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<Textbox />);
  });

  it("should call setActive on Input blur", () => {
    const setActiveMock = jest.fn();

    utils.blurChildComponent(
      <Textbox id="1" setActive={setActiveMock} />,
      Input
    );

    expect(setActiveMock).toHaveBeenCalled();
    expect(setActiveMock).toHaveBeenCalledWith("1");
  });

  it("should call updateValue on Input change", () => {
    const updateValueMock = jest.fn();

    utils.changeChildComponent(
      <Textbox id="1" updateValue={updateValueMock} />,
      Input,
      { target: { value: "New Value" } }
    );

    expect(updateValueMock).toHaveBeenCalled();
    expect(updateValueMock).toHaveBeenCalledWith("1", "New Value");
  });

  describe("componentDidUpdate", () => {
    it("should not call validate if it is not active", () => {
      const validateMock = jest.fn();
      const props = { active: false, value: "" };
      const wrapper = utils.generateEnzymeWrapper(<Textbox {...props} />);

      const newProps = { active: false, value: "New Value" };
      utils.mockComponentClassFunction(wrapper, "validate", validateMock);
      utils.updateProps(wrapper, newProps);

      expect(validateMock).not.toHaveBeenCalled();
    });

    it("should not call validate if the value has not changed", () => {
      const validateMock = jest.fn();
      const props = { active: true, value: "" };
      const wrapper = utils.generateEnzymeWrapper(<Textbox {...props} />);

      const newProps = { active: true, value: "", otherProp: true };
      utils.mockComponentClassFunction(wrapper, "validate", validateMock);
      utils.updateProps(wrapper, newProps);

      expect(validateMock).not.toHaveBeenCalled();
    });

    it("should call validate if it switches from inactive to active", () => {
      const validateMock = jest.fn();
      const props = { active: false, value: "value" };
      const wrapper = utils.generateEnzymeWrapper(<Textbox {...props} />);

      const newProps = { active: true, value: "value" };
      utils.mockComponentClassFunction(wrapper, "validate", validateMock);
      utils.updateProps(wrapper, newProps);

      expect(validateMock).toHaveBeenCalled();
    });

    it("should call validate if the value changes and it is active", () => {
      const validateMock = jest.fn();
      const props = { active: true, value: "" };
      const wrapper = utils.generateEnzymeWrapper(<Textbox {...props} />);

      const newProps = { active: true, value: "New Value" };
      utils.mockComponentClassFunction(wrapper, "validate", validateMock);
      utils.updateProps(wrapper, newProps);

      expect(validateMock).toHaveBeenCalled();
    });
  });

  describe("validate", () => {
    it("should set and error and invalidate the element if required is true and the value is empty", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const props = {
        id: "1",
        required: true,
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        value: ""
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).toHaveBeenCalled();
      expect(setErrorMock).toHaveBeenCalledWith("1", "This Field is required");
      expect(setFieldValidityMock).toHaveBeenCalled();
      expect(setFieldValidityMock).toHaveBeenCalledWith("1", false);
    });

    it("should set an error and invalidate the element if there is a validation function that fails", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const validationMock = jest.fn(() => false);
      const props = {
        id: "1",
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        validation: { error: "bad juju", func: validationMock },
        value: "Bad value"
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).toHaveBeenCalled();
      expect(setErrorMock).toHaveBeenCalledWith("1", "bad juju");
      expect(setFieldValidityMock).toHaveBeenCalled();
      expect(setFieldValidityMock).toHaveBeenCalledWith("1", false);
      expect(validationMock).toHaveBeenCalled();
      expect(validationMock).toHaveBeenCalledWith("Bad value");
    });

    it("should remove set errors and validate the element if there is a validation function that passes", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const validationMock = jest.fn(() => true);
      const props = {
        id: "1",
        required: true,
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        valid: false,
        validation: { func: validationMock },
        value: "Good boy"
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).toHaveBeenCalled();
      expect(setErrorMock).toHaveBeenCalledWith("1", null);
      expect(setFieldValidityMock).toHaveBeenCalled();
      expect(setFieldValidityMock).toHaveBeenCalledWith("1", true);
      expect(validationMock).toHaveBeenCalled();
      expect(validationMock).toHaveBeenCalledWith("Good boy");
    });

    it("should call nothing if it is already valid and it passed all validation", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const validationMock = jest.fn(() => true);
      const props = {
        id: "1",
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        valid: true,
        validation: { func: validationMock },
        value: "Good boy"
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).not.toHaveBeenCalled();
      expect(setFieldValidityMock).not.toHaveBeenCalled();
      expect(validationMock).toHaveBeenCalled();
      expect(validationMock).toHaveBeenCalledWith("Good boy");
    });

    it("should call nothing if it is already valid, there is no validation and it passed the required check", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const props = {
        id: "1",
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        valid: true,
        value: "Passing value"
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).not.toHaveBeenCalled();
      expect(setFieldValidityMock).not.toHaveBeenCalled();
    });

    it("should remove set errors and validate the element if it is invalid, there is no validation and it passed the required check", () => {
      const setErrorMock = jest.fn();
      const setFieldValidityMock = jest.fn();
      const props = {
        id: "1",
        setError: setErrorMock,
        setFieldValidity: setFieldValidityMock,
        valid: false,
        value: "Free pass"
      };

      utils.runComponentClassFunction(<Textbox {...props} />, "validate");

      expect(setErrorMock).toHaveBeenCalled();
      expect(setErrorMock).toHaveBeenCalledWith("1", null);
      expect(setFieldValidityMock).toHaveBeenCalled();
      expect(setFieldValidityMock).toHaveBeenCalledWith("1", true);
    });
  });

  describe("Input", () => {
    it("should render without crahsing", () => {
      utils.testComponentRender(<Input />);
    });

    it("should have a background of theme.colors.inputBackground", () => {
      utils.testCssPropery(
        <Input theme={theme} />,
        "background",
        theme.colors.inputBackground
      );
    });

    it("should have a color of theme.colors.inpurtPlaceholder on ::placeholder", () => {
      utils.testCssModifierPropery(
        <Input theme={theme} />,
        "color",
        theme.colors.inpurtPlaceholder,
        "::placeholder"
      );
    });

    it("should have a border-color of theme.colors.inputBorder on :hover and :focus", () => {
      utils.testCssModifierPropery(
        <Input theme={theme} />,
        "border-color",
        theme.colors.inputBorder,
        ":hover"
      );

      utils.testCssModifierPropery(
        <Input theme={theme} />,
        "border-color",
        theme.colors.inputBorder,
        ":focus"
      );
    });
  });

  describe("TextboxContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<TextboxContainer />);
    });

    it("should have a color of theme.colors.inputText", () => {
      utils.testCssPropery(
        <TextboxContainer theme={theme} />,
        "color",
        theme.colors.inputText
      );
    });
  });

  describe("TextboxErrorContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<TextboxErrorContainer />);
    });

    it("should have a color of theme.colors.accentAlt", () => {
      utils.testCssPropery(
        <TextboxErrorContainer theme={theme} />,
        "color",
        theme.colors.accentAlt
      );
    });

    it("should have a display of flex if error is truthy", () => {
      utils.testCssPropery(
        <TextboxErrorContainer error="an error!!" theme={theme} />,
        "color",
        theme.colors.accentAlt
      );
    });

    it("should have a display of none if error is falsy", () => {
      utils.testCssPropery(
        <TextboxErrorContainer theme={theme} />,
        "color",
        theme.colors.accentAlt
      );
    });
  });

  describe("TextboxMainContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<TextboxMainContainer />);
    });

    it("should have a color and i color of theme.colors.accentAlt if error is truthy", () => {
      utils.testCssPropery(
        <TextboxMainContainer error="an error!!" theme={theme} />,
        "color",
        theme.colors.accentAlt
      );

      utils.testCssModifierPropery(
        <TextboxMainContainer error="an error!!" theme={theme} />,
        "color",
        theme.colors.accentAlt,
        "i"
      );
    });

    it("should have a i color of transparent if error is truthy", () => {
      utils.testCssModifierPropery(
        <TextboxMainContainer theme={theme} />,
        "color",
        "transparent",
        "i"
      );
    });
  });
});
