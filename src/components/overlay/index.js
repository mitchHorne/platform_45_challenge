import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as textUtils from "../../utils/textTransform";

export const OverlayContainer = styled.div`
  background: ${props => props.theme.colors.accentAlt};
  display: flex;
  flex-direction: column;
  height: 70vh;
  left: ${props => (props.active ? "30%" : "-40%")};
  padding: 15vh 10%;
  position: fixed;
  text-align: left;
  transition: left 0.25s, top 0.25s;
  width: 50%;
  z-index: 2;

  h1 {
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    left: 0;
    height: 92.5vh;
    padding: 2.5vh 5% 5vh;
    position: absolute;
    width: 90%;

    ${props => (props.active ? "top: 100vh;" : "top: 0;")}

    p {
      font-size: 1.25em;
    }

  @media only screen and (max-width: 320px) {
    p {
      font-size: 1em;
    }
  }
`;

export const Overlay = props => {
  const { active, heading, text } = props;

  return (
    <OverlayContainer active={active}>
      <h1>{heading}</h1>
      <p>{textUtils.transformText(text)}</p>
    </OverlayContainer>
  );
};

Overlay.propTypes = {
  active: PropTypes.bool,
  heading: PropTypes.string,
  text: PropTypes.string
};
