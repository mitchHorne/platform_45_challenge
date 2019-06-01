import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import { Heading, SubHeading, Body, NotFoundPage } from "../";

describe("NotFoundPage", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<NotFoundPage />);
  });

  describe("Heading", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<Heading theme={theme} />);
    });

    it("should have a color of theme.colors.danger", () => {
      utils.testCssPropery(
        <Heading theme={theme} />,
        "color",
        theme.colors.danger
      );
    });
  });

  describe("SubHeading", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<SubHeading />);
    });

    it("should have a color of theme.colors.danger", () => {
      utils.testCssPropery(
        <SubHeading theme={theme} />,
        "color",
        theme.colors.danger
      );
    });
  });

  describe("Body", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<Body />);
    });
  });
});
