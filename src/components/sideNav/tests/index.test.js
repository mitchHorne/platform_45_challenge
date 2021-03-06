import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import {
  Container,
  Nav,
  OverlayToggleButton,
  ProfileImage,
  SideNav
} from "../";

describe("SideNav", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<SideNav />);
  });

  describe("Container", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<Container theme={theme} />);
    });
  });

  describe("OverlayToggleButton", () => {
    it("should render without crashing", () => {
      utils.testComponentDeepRender(<OverlayToggleButton />);
    });

    it("should have a transform property of rotate(180deg) if prop overlayActive is true", () => {
      utils.testCssPropery(
        <OverlayToggleButton overlayActive={true} />,
        "transform",
        "rotate(180deg)"
      );
    });

    it("should call toggleOverloay on click", () => {
      const toggleOverloayMock = jest.fn();
      const component = <SideNav toggleOverloay={toggleOverloayMock} />;

      utils.clickChildComponent(component, OverlayToggleButton);

      expect(toggleOverloayMock).toHaveBeenCalled();
    });

    it("should have a transform property of rotate(90deg) if prop overlayActive is false and max-width < 768px", () => {
      utils.testCssMediaPropery(
        <OverlayToggleButton overlayActive={false} />,
        "transform",
        "rotate(90deg)",
        "only screen and (max-width: 768px)"
      );
    });

    it("should have a transform property of rotate(270deg) if prop overlayActive is true and max-width < 768px", () => {
      utils.testCssMediaPropery(
        <OverlayToggleButton overlayActive={true} />,
        "transform",
        "rotate(270deg)",
        "only screen and (max-width: 768px)"
      );
    });
  });

  describe("Nav", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<Nav theme={theme} />);
    });

    it("should have a background of theme.colors.accent", () => {
      utils.testCssPropery(
        <Nav theme={theme} />,
        "background",
        theme.colors.accent
      );
    });
  });

  describe("ProfileImage", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<ProfileImage />);
    });
  });
});
