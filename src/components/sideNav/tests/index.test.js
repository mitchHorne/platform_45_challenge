import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

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
    shallow(<SideNav />);
  });

  describe("Container", () => {
    it("should render without crashing", () => {
      shallow(<Container theme={theme} />);
    });
  });

  describe("OverlayToggleButton", () => {
    it("should render without crashing", () => {
      renderer.create(<OverlayToggleButton />);
    });

    it("should have a transform property of rotate(180deg) if prop overlayActive is true", () => {
      const component = renderer
        .create(<OverlayToggleButton overlayActive={true} />)
        .toJSON();
      expect(component).toHaveStyleRule("transform", "rotate(180deg)");
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
      shallow(<Nav theme={theme} />);
    });

    it("should have a background of theme.colors.accent", () => {
      const component = renderer.create(<Nav theme={theme} />).toJSON();
      expect(component).toHaveStyleRule("background", theme.colors.accent);
    });
  });

  describe("ProfileImage", () => {
    it("should render without crashing", () => {
      shallow(<ProfileImage />);
    });
  });
});
