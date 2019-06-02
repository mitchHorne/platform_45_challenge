import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${props =>
    props.approve
      ? props.theme.colors.positiveAccent
      : props.clear
      ? props.theme.colors.inputBackground
      : props.theme.colors.inputBackground};
  border: 0;
  border-radius: 5px;
  color: ${props =>
    props.approve
      ? "white"
      : props.clear
      ? props.theme.colors.primaryText
      : props.theme.colors.primaryText};
  margin: 1em;
  padding: 2em;
  width: 20%;

  :hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }

  :focus {
    outline: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormButton = props => {
  const { approve, clear, disabled, func, label } = props;

  return (
    <StyledButton
      approve={approve}
      clear={clear}
      disabled={disabled}
      onClick={e => {
        e.preventDefault();
        func();
      }}
    >
      {label}
    </StyledButton>
  );
};
