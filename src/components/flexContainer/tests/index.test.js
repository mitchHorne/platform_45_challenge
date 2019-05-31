import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";

import { FlexContainer } from "../";

describe("FlexContainer", () => {
  it("should render without crashing", () => {
    shallow(<FlexContainer />);
  });
});
