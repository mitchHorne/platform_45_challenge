import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { theme } from "../../../theme";
import { Container, ProfileImage, SideNav } from "../";

describe("SideNav", () => {
  it("should render without crashing", () => {
    shallow(<SideNav />);
  });

  describe("Container", () => {
    it("should render without crashing", () => {
      shallow(<Container theme={theme} />);
    });

    it("should have a background of theme.colors.accent", () => {
      const component = renderer.create(<Container theme={theme} />).toJSON();
      expect(component).toHaveStyleRule("background", theme.colors.accent);
    });
  });

  describe("ProfileImage", () => {
    it("should render without crashing", () => {
      shallow(<ProfileImage />);
    });
  });
});
