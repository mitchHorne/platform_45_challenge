import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const TextboxContainer = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.inputText};
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  width: 100%;

  i {
    color: transparent;
    font-size: 0.5em;
    padding-right: 0.5em;
    position: relative;
    top: -10px;
  }
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.inputBackground};
  border: 1.2px solid transparent;
  border-radius: 5px;
  font-size: 1em;
  padding: 1em;
  transition: all 0.25s;
  width: 80%;

  ::placeholder {
    color: ${props => props.theme.colors.inpurtPlaceholder};
  }

  :hover {
    border-color: ${props => props.theme.colors.inputBorder};
  }

  :focus {
    border-color: ${props => props.theme.colors.inputBorder};
    outline: 0;
  }
`;

export class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };

    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.setState({ ...this.state, active: true });
  }

  render() {
    const { label, placeholder } = this.props;

    return (
      <TextboxContainer>
        <label>
          <i className="fas fa-circle" />
          {label}
        </label>
        <Input
          onBlur={() => this.setActive()}
          placeholder={placeholder}
          type="text"
        />
      </TextboxContainer>
    );
  }
}

Textbox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
};
