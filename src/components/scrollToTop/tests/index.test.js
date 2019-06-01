import React from "react";

import * as utils from "../../../utils/testing";
import { ScrollToTopComponent as ScrollToTop } from "../";

describe("ScrollToTop", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<ScrollToTop />);
  });

  describe("componentDidUpdate", () => {
    it("should call window.scrollTo with (0,0) if the current location (url) is is changes", () => {
      window.scrollTo = jest.fn();
      const newProps = { location: "newLocation" };

      utils.updateProps(<ScrollToTop location="First location" />, newProps);

      expect(window.scrollTo).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it("should not call window.scrollTo if the current location (url) does not change", () => {
      window.scrollTo = jest.fn();
      const newProps = { location: "Same location" };

      utils.updateProps(<ScrollToTop location="Same location" />, newProps);

      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });
});
