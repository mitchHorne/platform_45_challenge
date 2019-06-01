import React from "react";
import { shallow } from "enzyme";

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
      const wrapper = shallow(<SideNav toggleOverloay={toggleOverloayMock} />);

      wrapper
        .find(OverlayToggleButton)
        .props()
        .onClick();

      expect(toggleOverloayMock).toHaveBeenCalled();
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
