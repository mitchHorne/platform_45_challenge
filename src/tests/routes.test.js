import "@babel/polyfill";
import "jest-canvas-mock";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { AppRouter, PrivateRoute } from "../Routes";

describe("Router", () => {
  describe("AppRouter", () => {
    it("should render without crashing", () => {
      shallow(<AppRouter />);
    });

    it("should render redirect on route render", () => {
      const wrapper = shallow(<AppRouter />);

      const renderedWrapper = shallow(
        <Router>
          {wrapper
            .find(Route)
            .at(1)
            .props()
            .render()}
        </Router>
      );

      expect(renderedWrapper.find(Redirect).length).toEqual(1);
    });
  });

  describe("PrivateRoute", () => {
    const component = () => <div />;
    const nav = () => <div />;
    const props = { component, nav };
    const auth = { isAuthenticated: () => true };

    it("should render without crashing", () => {
      shallow(<PrivateRoute {...props} />);
    });

    it("should render component with a nav if authenticated on render and a nav was provided", () => {
      const wrapper = shallow(<PrivateRoute {...props} auth={auth} />);

      const renderedWrapper = shallow(
        wrapper
          .find(Route)
          .props()
          .render()
      );

      expect(renderedWrapper.find(component).length).toEqual(1);
      expect(renderedWrapper.find(nav).length).toEqual(1);
    });

    it("should render component without a nav if authenticated on render and no nav is provided", () => {
      const testProps = { ...props, auth, nav: undefined };

      const wrapper = shallow(<PrivateRoute {...testProps} />);

      const renderedWrapper = shallow(
        wrapper
          .find(Route)
          .props()
          .render()
      );

      expect(renderedWrapper.find(component).length).toEqual(1);
    });

    it("should render redirect if not authenticated on render", () => {
      const testAuth = { isAuthenticated: () => false };
      const testProps = { ...props, auth: testAuth };

      const wrapper = shallow(<PrivateRoute {...testProps} />);

      const renderedWrapper = shallow(
        <Router>
          {wrapper
            .find(Route)
            .props()
            .render({})}
        </Router>
      );

      expect(renderedWrapper.find(Redirect).length).toEqual(1);
    });
  });
});
