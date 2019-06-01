import React from "react";
import { shallow } from "enzyme";

import * as utils from "../../../utils/testing";
import { Home } from "../";

describe("Home", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<Home />);
  });

  describe("toggleOverlay", () => {
    it("should toggle state.overlayActive between true/false", () => {
      const wrapper = shallow(<Home />);
      const initialOverlayState = wrapper.state().overlayActive;

      wrapper.instance().toggleOverlay();

      const alteredOverlayState = wrapper.state().overlayActive;

      expect(initialOverlayState).toEqual(false);
      expect(alteredOverlayState).toEqual(true);
    });
  });
});
