import React from "react";
import styled from "styled-components";

import ProfileImageSrc from "../../assets/profile.png";

export const Container = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.accent};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 25%;

  p {
    text-align: center;
    width: 75%;
  }
`;

export const ProfileImage = styled.img`
  padding: 0 0 7.5em;
  width: 50%;
`;

export const SideNav = () => (
  <Container>
    <ProfileImage src={ProfileImageSrc} />
    <h1>Front-end challenge!</h1>
    <p>This is a design that you will need to code up and impress us.</p>
  </Container>
);
