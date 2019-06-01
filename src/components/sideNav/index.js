import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import overlayToggleSrc from "../../assets/arrow.png";

export const Nav = styled.div`
  background: ${props => props.theme.colors.accent};
  display: flex;
  height: 90vh;
  padding: 5vh 5%;
  position: fixed;
  width: 20%;
  z-index: 3;

  @media only screen and (max-width: 768px) {
    height: 90vh;
    padding: 5vh 5%;
    width: 90%;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const OverlayToggleButton = styled.img`
  transition: transform 0.25s;

  ${props => (props.overlayActive ? "transform: rotate(180deg);" : "")}

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 15%;

    ${props =>
      props.overlayActive
        ? "transform: rotate(270deg);"
        : "transform: rotate(90deg);"}
  }

  @media only screen and (max-width: 481px) {
    width: 25%;
`;

export const SideNav = props => {
  const { overlayActive, profileImage, toggleOverloay } = props;
  return (
    <Nav>
      <Container>
        <ProfileImage src={profileImage} />
        <div>
          <h1>Front-end challenge!</h1>
          <p>This is a design that you will need to code up and impress us.</p>
          <p>
            Hope my work impresses you{" "}
            <span role="img" aria-label="Tongue out">
              &#x1F61C;
            </span>
          </p>
        </div>
        <OverlayToggleButton
          onClick={() => toggleOverloay()}
          overlayActive={overlayActive}
          src={overlayToggleSrc}
        />
      </Container>
    </Nav>
  );
};

SideNav.propTypes = {
  overlayActive: PropTypes.bool,
  profileImage: PropTypes.string,
  toggleOverloay: PropTypes.func
};
