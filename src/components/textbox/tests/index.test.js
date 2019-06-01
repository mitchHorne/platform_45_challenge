import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import { Input, Textbox, TextboxContainer } from "../";

describe("Textbox", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<Textbox />);
  });

  it("should call setActive when Input loses focus", () => {
    const setActiveMock = jest.fn();
    const wrapper = utils.generateEnzymeWrapper(<Textbox />);

    utils.mockComponentClassFunction(wrapper, "setActive", setActiveMock);
    utils.blurChildComponent(wrapper, Input);

    expect(setActiveMock).toHaveBeenCalled();
  });

  describe("setActive", () => {
    it("should set state.active to true", () => {
      const wrapper = utils.generateEnzymeWrapper(<Textbox />);
      const initialVal = utils.getStateProperty(wrapper, "active");

      utils.runComponentClassFunction(wrapper, "setActive");

      const alteredVal = utils.getStateProperty(wrapper, "active");

      expect(initialVal).toEqual(false);
      expect(alteredVal).toEqual(true);
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
});
