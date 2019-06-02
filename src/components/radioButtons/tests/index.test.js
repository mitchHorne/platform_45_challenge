import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import {
  Radio,
  RadioContainer,
  RadioButtonOptionsContainer,
  RadioButtonOption,
  RadioButton
} from "../";

describe("Radio", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<Radio />);
  });

  describe("renderOptions", () => {
    it("should return No options if no options are passed to Radio", () => {
      const expected = <span>No options</span>;
      const received = utils.runComponentClassFunction(
        <Radio />,
        "renderOptions"
      );

      expect(received).toEqual(expected);
    });

    it("should return renderable options if options are passed to Radio", () => {
      const props = {
        id: "1",
        options: [{ label: "my option", icon: "my Icon", value: "1" }],
        setFieldValidity: () => {},
        updateValue: () => {},
        valid: true,
        value: null
      };

      const received = (
        <div>
          {utils.runComponentClassFunction(
            <Radio {...props} />,
            "renderOptions"
          )}
        </div>
      );

      utils.testComponentRender(received);
    });

    describe("RadioButton", () => {
      it("should call setFieldValidity and updateValue on click if not valid", () => {
        const setFieldValidityMock = jest.fn();
        const updateValueMock = jest.fn();
        const props = {
          id: "1",
          options: [{ label: "my option", icon: "my Icon", value: "1" }],
          setFieldValidity: setFieldValidityMock,
          updateValue: updateValueMock,
          valid: false,
          value: null
        };

        const wrapper = utils.generateEnzymeWrapper(
          <div>
            {utils.runComponentClassFunction(
              <Radio {...props} />,
              "renderOptions"
            )}
          </div>
        );

        utils.clickChildComponent(wrapper, RadioButton);

        expect(setFieldValidityMock).toHaveBeenCalled();
        expect(setFieldValidityMock).toHaveBeenCalledWith("1", true);
        expect(updateValueMock).toHaveBeenCalled();
        expect(updateValueMock).toHaveBeenCalledWith("1", "1");
      });

      it("should call only updateValue on click if valid", () => {
        const setFieldValidityMock = jest.fn();
        const updateValueMock = jest.fn();
        const props = {
          id: "1",
          options: [{ label: "my option", icon: "my Icon", value: "1" }],
          setFieldValidity: setFieldValidityMock,
          updateValue: updateValueMock,
          valid: true,
          value: null
        };

        const wrapper = utils.generateEnzymeWrapper(
          <div>
            {utils.runComponentClassFunction(
              <Radio {...props} />,
              "renderOptions"
            )}
          </div>
        );

        utils.clickChildComponent(wrapper, RadioButton);

        expect(setFieldValidityMock).not.toHaveBeenCalled();
        expect(updateValueMock).toHaveBeenCalled();
        expect(updateValueMock).toHaveBeenCalledWith("1", "1");
      });
    });
  });

  describe("RadioContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(<RadioContainer theme={theme} />);
    });
  });

  describe("RadioButtonOptionsContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(
        <RadioButtonOptionsContainer theme={theme} />
      );
    });
  });

  describe("RadioButtonOption", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(<RadioButtonOption theme={theme} />);
    });
  });

  describe("RadioButton", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(<RadioButton src={"url"} theme={theme} />);
    });

    it("should have the appropriate properties if selected is true", () => {
      const Component = <RadioButton selected src={"url"} theme={theme} />;

      utils.testCssPropery(Component, "background", theme.colors.accentLight);
      utils.testCssModifierPropery(Component, "stroke", "white", "svg g");
      utils.testCssModifierPropery(Component, "fill", "white", "svg path");
    });

    it("should have the appropriate properties if selected is false", () => {
      const Component = <RadioButton src={"url"} theme={theme} />;

      utils.testCssPropery(
        Component,
        "background",
        theme.colors.radioUnselectedBackground
      );
      utils.testCssModifierPropery(
        Component,
        "stroke",
        theme.colors.accentLight,
        "svg g"
      );
      utils.testCssModifierPropery(
        Component,
        "fill",
        theme.colors.accentLight,
        "svg path"
      );
    });

    it("should have a background of theme.colors.accentLight if hovered over", () => {
      utils.testCssModifierPropery(
        <RadioButton src={"url"} theme={theme} />,
        "background",
        theme.colors.accentLight,
        ":hover"
      );
    });
  });
});
