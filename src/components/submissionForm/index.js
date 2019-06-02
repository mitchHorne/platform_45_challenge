import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Textbox } from "../textbox";
import { Radio } from "../radioButtons";

import { formInputTypes } from "../../appData/types";

export const FormContainer = styled.form`
  min-height: 90vh;
  padding: 5vh 5%;
  padding-left: 35%;
  width: 60%;

  @media only screen and (max-width: 768px) {
    padding: 5vh 5%;
    width: 90%;
  }
`;

export class SubmissionForm extends Component {
  constructor(props) {
    super(props);

    const initialState = {};

    if (Array.isArray(props.fields))
      props.fields.forEach(field => {
        let valid = false;

        if (
          (field.type === formInputTypes.RADIO_BUTTONS && field.starting) ||
          (field.type === formInputTypes.RADIO_BUTTONS && !field.required)
        )
          valid = true;

        initialState[field.id] = {
          active: false,
          error: null,
          valid,
          value: field.starting
        };
      });

    this.state = initialState;

    this.setActive = this.setActive.bind(this);
    this.setError = this.setError.bind(this);
    this.setFieldValidity = this.setFieldValidity.bind(this);
    this.updateFieldValue = this.updateFieldValue.bind(this);
  }

  renderFormFields() {
    if (!Array.isArray(this.props.fields))
      return <span>No fields provided</span>;

    return this.props.fields.map(field => {
      const {
        id,
        label,
        options,
        placeholder,
        required,
        type,
        validation
      } = field;

      switch (type) {
        case formInputTypes.DATE:
          return <span key={`DATE_INPUT_${id}`}>Not implemented Yet</span>;

        case formInputTypes.RADIO_BUTTONS:
          return (
            <Radio
              id={id}
              key={`RADIO_BUTTONS_INPUT_${id}`}
              label={label}
              options={options}
              setFieldValidity={this.setFieldValidity}
              updateValue={this.updateFieldValue}
              valid={this.state[id].valid}
              value={this.state[id].value}
            />
          );

        case formInputTypes.TEXTBOX:
          return (
            <Textbox
              active={this.state[id].active}
              error={this.state[id].error}
              key={`TEXTBOX_INPUT_${id}`}
              id={id}
              label={label}
              placeholder={placeholder}
              required={required}
              setActive={this.setActive}
              setError={this.setError}
              setFieldValidity={this.setFieldValidity}
              updateValue={this.updateFieldValue}
              valid={this.state[id].valid}
              validation={validation}
              value={this.state[id].value}
            />
          );

        default:
          return (
            <span key={`UNSUPPORTED_INPUT_${id}`}>Not implemented Yet</span>
          );
      }
    });
  }

  setActive(id) {
    const newState = { ...this.state };
    newState[id].active = true;

    this.setState(newState);
  }

  setError(id, error) {
    const newState = { ...this.state };
    newState[id].error = error;

    this.setState(newState);
  }

  setFieldValidity(id, valid) {
    const newState = { ...this.state };
    newState[id].valid = valid;

    this.setState(newState);
  }

  updateFieldValue(id, value) {
    const newState = { ...this.state };
    newState[id].value = value;

    this.setState(newState);
  }

  render() {
    return <FormContainer>{this.renderFormFields()}</FormContainer>;
  }
}

SubmissionForm.propTypes = {
  fields: PropTypes.array,
  valid: PropTypes.bool,
  toggleValid: PropTypes.func
};
