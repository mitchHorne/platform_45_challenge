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
  componentDidUpdate(prevProps) {
    const { active: prevActive, value: prevValue } = prevProps;
    const { active, value } = this.props;

    // Prevent validation of untouched items
    if (!active) return;

    // Prevent unnecessary revalidations
    if (prevActive === active && prevValue === value) return;

    this.validate();
  }

  validate() {
    const {
      id,
      required,
      setError,
      setFieldValidity,
      valid,
      validation,
      value
    } = this.props;

    if (required && !value) {
      setError(id, "This Field is required");
      return setFieldValidity(id, false);
    }

    if (validation) {
      const { error, func } = validation;

      if (!func(value)) {
        setError(id, error);
        return setFieldValidity(id, false);
      }

      if (valid) return;

      setError(id, null);
      return setFieldValidity(id, true);
    }

    if (valid) return;

    setError(id, null);
    setFieldValidity(id, true);
  }

  render() {
    const {
      id,
      label,
      placeholder,
      setActive,
      updateValue,
      value
    } = this.props;

    return (
      <TextboxContainer>
        <label>
          <i className="fas fa-circle" />
          {label}
        </label>
        <Input
          onBlur={() => setActive(id)}
          onChange={e => updateValue(id, e.target.value)}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      </TextboxContainer>
    );
  }
}

Textbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  setActive: PropTypes.func,
  setError: PropTypes.func,
  setFieldValidity: PropTypes.func,
  updateValue: PropTypes.func,
  validation: PropTypes.object,
  value: PropTypes.string
};
