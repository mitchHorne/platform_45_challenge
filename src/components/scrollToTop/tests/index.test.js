import React from "react";

import * as utils from "../../../utils/testing";
import { ScrollToTopComponent as ScrollToTop } from "../";

describe("ScrollToTop", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<ScrollToTop />);
  });

  describe("componentDidUpdate", () => {
    it("should call window.scrollTo with (0,0) if the current location (url) changes", () => {
      window.scrollTo = jest.fn();
      const newProps = { location: { pathname: "new Location" } };

      utils.updateProps(
        <ScrollToTop location={{ pathname: "First location" }} />,
        newProps
      );

      expect(window.scrollTo).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it("should not call window.scrollTo if the current location (url) does not change", () => {
      window.scrollTo = jest.fn();
      const newProps = { location: { pathname: "Same location" } };

      utils.updateProps(
        <ScrollToTop location={{ pathname: "Same location" }} />,
        newProps
      );

      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });
});
