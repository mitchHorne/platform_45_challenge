import styled from "styled-components";
import PropTypes from "prop-types";

export const BasicContainer = styled.div`
  background: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.lightPrimary};
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  position: ${props => (props.position ? props.position : "static")};
  width: 100%;

  @media (max-width: 801px) {
    padding: 0 1em;
  }
`;

BasicContainer.propTypes = {
  position: PropTypes.oneOf([
    "static",
    "absolute",
    "fixed",
    "relative",
    "sticky",
    "initial",
    "inherit"
  ]),
  backgroundColor: PropTypes.string
};
