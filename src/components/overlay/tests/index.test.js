import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import { OverlayContainer, Overlay } from "../";

describe("Overlay", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(
      <Overlay active={false} heading="head" text="body" />
    );
  });

  describe("OverlayContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<OverlayContainer theme={theme} />);
    });

    it("should render have a background of theme.colors.accentAlt", () => {
      utils.testCssPropery(
        <OverlayContainer theme={theme} />,
        "background",
        theme.colors.accentAlt
      );
    });

    it("should have a property left of 30% if active is true", () => {
      utils.testCssPropery(
        <OverlayContainer active={true} theme={theme} />,
        "left",
        "30%"
      );
    });

    it("should have a property left of -40% if active is false", () => {
      utils.testCssPropery(
        <OverlayContainer active={false} theme={theme} />,
        "left",
        "-40%"
      );
    });
  });
});
