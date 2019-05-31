import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

// Theme imports
import { theme } from "./theme";

// Component and page imports
import ScrollToTop from "./components/scrollToTop";
import { NotFoundPage } from "./containers/404";
import { Home } from "./containers/home";

export class AppRouter extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <div>
              <Helmet>
                <title>Platform 45 Challenge</title>
                <meta charSet="utf-8" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Helmet>
              <ToastContainer />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    );
  }
}

export default AppRouter;
