import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";

import { Home } from "../";

describe("Home", () => {
  it("should render without crashing", () => {
    shallow(<Home />);
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
