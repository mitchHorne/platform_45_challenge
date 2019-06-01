import { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

export class ScrollToTopComponent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTopComponent.propTypes = {
  location: PropTypes.object
};

export const ScrollToTop = withRouter(ScrollToTopComponent);
