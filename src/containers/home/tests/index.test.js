import React from "react";

import * as utils from "../../../utils/testing";
import { Home } from "../";

describe("Home", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<Home />);
  });

  describe("toggleOverlay", () => {
    it("should toggle state.overlayActive between true/false", () => {
      const wrapper = utils.generateEnzymeWrapper(<Home />);
      const initialVal = utils.getStateProperty(wrapper, "overlayActive");

      utils.runComponentClassFunction(wrapper, "toggleOverlay");

      const alteredVal = utils.getStateProperty(wrapper, "overlayActive");

      expect(initialVal).toEqual(false);
      expect(alteredVal).toEqual(true);
    });
  });

  describe("toggleValid", () => {
    it("should toggle state.valid between true/false", () => {
      const wrapper = utils.generateEnzymeWrapper(<Home />);
      const initialVal = utils.getStateProperty(wrapper, "valid");

      utils.runComponentClassFunction(wrapper, "toggleValid");

      const alteredVal = utils.getStateProperty(wrapper, "valid");

      expect(initialVal).toEqual(false);
      expect(alteredVal).toEqual(true);
    });
  });
});
