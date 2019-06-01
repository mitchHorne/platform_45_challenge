import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Heading = styled.h1`
  color: ${props => props.theme.colors.danger};
  font-size: 6em;
  margin: 0;
`;

export const SubHeading = styled.h2`
  color: ${props => props.theme.colors.danger};
  font-size: 4em;
  margin: 0;
`;

export const Body = styled.div`
  font-size: 3em;
  margin: 0;

  p {
    margin: 0;
  }
`;

export const NotFoundPage = () => (
  <div>
    <Heading>404</Heading>
    <SubHeading>Page Not Found</SubHeading>
    <Body>
      <p>The page you are looking for does not exist</p>
      <p>
        <Link to="/">Go Back Home</Link>
      </p>
    </Body>
  </div>
);
