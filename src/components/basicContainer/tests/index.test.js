import "jest-styled-components";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { BasicContainer } from "../";

describe("BasicContainer", () => {
  const theme = { colors: { lightPrimary: "lightPrimary" } };
  it("should render without crashing", () => {
    shallow(<BasicContainer />);
  });

  it("should have a background of lightPrimary if backgroundColor is not set", () => {
    const component = renderer
      .create(<BasicContainer theme={theme} />)
      .toJSON();
    expect(component).toHaveStyleRule("background", "lightPrimary");
  });

  it("should have a background of whatever it is set to", () => {
    const component = renderer
      .create(<BasicContainer backgroundColor="color" />)
      .toJSON();
    expect(component).toHaveStyleRule("background", "color");
  });

  it("should have a position of static if no position is set", () => {
    const component = renderer
      .create(<BasicContainer theme={theme} />)
      .toJSON();
    expect(component).toHaveStyleRule("position", "static");
  });

  it("should have a position of whatever it is set to", () => {
    const component = renderer
      .create(<BasicContainer position="relative" theme={theme} />)
      .toJSON();
    expect(component).toHaveStyleRule("position", "relative");
  });
});
