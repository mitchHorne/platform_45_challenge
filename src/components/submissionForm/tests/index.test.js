import React from "react";

import * as utils from "../../../utils/testing";
import { theme } from "../../../theme";
import { FormContainer, SubmissionForm } from "../";

describe("SubmissionForm", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<SubmissionForm />);
  });

  describe("FormContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<FormContainer />);
    });
  });
});
