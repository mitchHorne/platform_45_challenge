import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";

import { Home } from "../";

describe("Home", () => {
  it("should render without crashing", () => {
    shallow(<Home />);
  });
});
