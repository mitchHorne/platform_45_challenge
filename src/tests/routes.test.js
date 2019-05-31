import "@babel/polyfill";
import "jest-canvas-mock";
import React from "react";
import { shallow } from "enzyme";

import { Router } from "../Routes";

describe("Router", () => {
  it("should render without crashing", () => {
    shallow(<Router />);
  });
});
