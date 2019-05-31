import React, { Component } from "react";
// import propTypes from "prop-types";

import { FlexContainer } from "../../components/flexContainer";
import { SideNav } from "../../components/sideNav";

export class Home extends Component {
  render() {
    return (
      <FlexContainer>
        <SideNav />
      </FlexContainer>
    );
  }
}

// Home.propTypes = {};
