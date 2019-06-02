import React from "react";

import { theme } from "../../../theme";
import * as utils from "../../../utils/testing";
import { FormButton, StyledButton } from "../";

describe("FormButton", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<FormButton />);
  });

  it("should call prevent default and the function passed to it on click", () => {
    const funcMock = jest.fn();
    const preventDefaultMock = jest.fn();
    const wrapper = utils.generateEnzymeWrapper(<FormButton func={funcMock} />);

    utils.clickComponent(wrapper, { preventDefault: preventDefaultMock });

    expect(funcMock).toHaveBeenCalled();
    expect(preventDefaultMock).toHaveBeenCalled();
  });

  describe("StyledButton", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(<StyledButton theme={theme} />);
    });

    it("should have the correct props if approve is true", () => {
      utils.testCssPropery(
        <StyledButton approve theme={theme} />,
        "background",
        theme.colors.positiveAccent
      );

      utils.testCssPropery(
        <StyledButton approve theme={theme} />,
        "color",
        "white"
      );
    });

    it("should have the correct props if approve is false and clear is true", () => {
      utils.testCssPropery(
        <StyledButton clear theme={theme} />,
        "background",
        theme.colors.inputBackground
      );

      utils.testCssPropery(
        <StyledButton clear theme={theme} />,
        "color",
        theme.colors.primaryText
      );
    });

    it("should have the correct cursor on hover", () => {
      utils.testCssModifierPropery(
        <StyledButton theme={theme} />,
        "cursor",
        "pointer",
        ":hover"
      );

      utils.testCssModifierPropery(
        <StyledButton disabled theme={theme} />,
        "cursor",
        "not-allowed",
        ":hover"
      );
    });
  });
});
