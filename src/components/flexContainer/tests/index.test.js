import React from "react";

import * as utils from "../../../utils/testing";
import { FlexContainer } from "../";

describe("FlexContainer", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<FlexContainer />);
  });
});
