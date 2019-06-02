import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const TextboxContainer = styled.div`
  color: ${props => props.theme.colors.inputText};
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  width: 100%;
`;

export const TextboxMainContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${props => (props.error ? `color: ${props.theme.colors.accentAlt};` : "")};

  i {
    color: ${props =>
      props.error ? props.theme.colors.accentAlt : "transparent"};
    font-size: 0.5em;
    padding-right: 0.5em;
    position: relative;
    top: -10px;
  }
`;

export const TextboxErrorContainer = styled.div`
  color: ${props => props.theme.colors.accentAlt};
  display: ${props => (props.show ? "flex" : "none")};
  font-size: 0.75em;
  justify-content: flex-end;
  padding: 0.5em 0;
  width: 100%;
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.inputBackground};
  border: 1.2px solid
    ${props => (props.error ? props.theme.colors.accentAlt : "transparent")};
  border-radius: 5px;
  font-size: 1em;
  padding: 1em;
  transition: all 0.25s;
  width: 80%;

  ${props => (props.error ? `color: ${props.theme.colors.accentAlt}` : "")};

  ::placeholder {
    color: ${props => props.theme.colors.inpurtPlaceholder};
  }

  :hover {
    border-color: ${props =>
      props.error
        ? props.theme.colors.accentAlt
        : props.theme.colors.inputBorder};
  }

  :focus {
    border-color: ${props =>
      props.error
        ? props.theme.colors.accentAlt
        : props.theme.colors.inputBorder};
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
      error,
      id,
      label,
      placeholder,
      setActive,
      updateValue,
      value
    } = this.props;

    return (
      <TextboxContainer>
        <TextboxMainContainer error={error}>
          <label>
            <i className="fas fa-circle" />
            {label}
          </label>
          <Input
            onBlur={() => setActive(id)}
            onChange={e => updateValue(id, e.target.value)}
            error={error}
            placeholder={placeholder}
            type="text"
            value={value}
          />
        </TextboxMainContainer>
        <TextboxErrorContainer show={error}>{error}</TextboxErrorContainer>
      </TextboxContainer>
    );
  }
}

Textbox.propTypes = {
  active: PropTypes.bool,
  error: PropTypes.string,
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
