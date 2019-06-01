import React, { Component } from "react";

import { FlexContainer } from "../../components/flexContainer";
import { SideNav } from "../../components/sideNav";
import ProfileImageSrc from "../../assets/profile.png";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { overlayActive: false };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ ...this.state, overlayActive: !this.state.overlayActive });
  }

  render() {
    const { overlayActive } = this.state;

    return (
      <FlexContainer>
        <SideNav
          overlayActive={overlayActive}
          profileImage={ProfileImageSrc}
          toggleOverloay={this.toggleOverlay}
        />
      </FlexContainer>
    );
  }
}
