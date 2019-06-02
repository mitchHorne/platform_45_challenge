import React, { Component } from "react";

import { FlexContainer } from "../../components/flexContainer";
import { SideNav } from "../../components/sideNav";
import { Overlay } from "../../components/overlay";
import { SubmissionForm } from "../../components/submissionForm";

import { submissionFormData } from "./data";

// These values would most likely be retrieved through a REST API endpoint
// so I'm passing them down from the container, so it can handle the logic
import ProfileImageSrc from "../../assets/profile.png";
const overlayHeading = "My World today";
const overlayText = `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ::{ "text": "View all days", "operations": ["bold", "underline"] }:: eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat`;

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { overlayActive: false, valid: false };

    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ ...this.state, overlayActive: !this.state.overlayActive });
  }

  toggleValid() {
    this.setState({ ...this.state, valid: !this.state.valid });
  }

  render() {
    const { toggleOverlay, toggleValid } = this;
    const { overlayActive, valid } = this.state;

    return (
      <FlexContainer>
        <SideNav
          overlayActive={overlayActive}
          profileImage={ProfileImageSrc}
          toggleOverloay={toggleOverlay}
        />
        <Overlay
          active={overlayActive}
          heading={overlayHeading}
          text={overlayText}
        />
        <SubmissionForm
          fields={submissionFormData}
          valid={valid}
          toggleValid={toggleValid}
        />
      </FlexContainer>
    );
  }
}
