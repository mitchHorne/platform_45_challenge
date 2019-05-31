import "@babel/polyfill";
import "jest-canvas-mock";
import React from "react";
import ReactDOM from "react-dom";

import "../";
import { Router } from "../Routes";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("App", () => {
  it("should call ReactDom.render with the router and root", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div id="root" />, div);

    const expected = [<Router />, document.getElementById("root")];

    expect(ReactDOM.render).toHaveBeenCalled();
    expect(ReactDOM.render).toHaveBeenCalledWith(...expected);
  });
});
