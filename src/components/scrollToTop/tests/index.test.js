import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";

import { ScrollToTopComponent as ScrollToTop } from "../";

describe("ScrollToTop", () => {
  it("should render without crashing", () => {
    shallow(<ScrollToTop />);
  });

  describe("componentDidUpdate", () => {
    it("should call window.scrollTo with (0,0) if the current location (url) is is changes", () => {
      window.scrollTo = jest.fn();
      const wrapper = shallow(<ScrollToTop location="First location" />);

      wrapper.setProps({ location: "newLocation" });

      expect(window.scrollTo).toHaveBeenCalled();
      expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it("should not call window.scrollTo if the current location (url) does not change", () => {
      window.scrollTo = jest.fn();

      const wrapper = shallow(<ScrollToTop location="Same location" />);
      wrapper.setProps({ location: "Same location" });

      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });
});
