import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { theme } from "../../../theme";
import { Heading, SubHeading, Body, NotFoundPage } from "../";

describe("NotFoundPage", () => {
  it("should render without crashing", () => {
    shallow(<NotFoundPage />);
  });

  describe("Heading", () => {
    it("should render without crashing", () => {
      shallow(<Heading theme={theme} />);
    });

    it("should have a color of theme.colors.danger", () => {
      const component = renderer.create(<Heading theme={theme} />).toJSON();
      expect(component).toHaveStyleRule("color", theme.colors.danger);
    });
  });

  describe("SubHeading", () => {
    it("should render without crashing", () => {
      shallow(<SubHeading theme={theme} />);
    });

    it("should have a color of theme.colors.danger", () => {
      const component = renderer.create(<SubHeading theme={theme} />).toJSON();
      expect(component).toHaveStyleRule("color", theme.colors.danger);
    });
  });

  describe("Body", () => {
    it("should render without crashing", () => {
      shallow(<Body />);
    });
  });
});
