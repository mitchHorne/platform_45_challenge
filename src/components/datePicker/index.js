import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import Calendar from "react-calendar";
import enhanceWithClickOutside from "react-click-outside";

import calendarIcon from "../../assets/calendar.svg";

export const DatePickerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  label {
    padding-left: 0.75em;
  }
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: calc(80% + 2em);
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.inputBackground};
  border: 1.2px solid
    ${props => (props.error ? props.theme.colors.accentAlt : "transparent")};
  border-radius: 5px;
  color: transparent;
  font-size: 1em;
  padding: 1em;
  position: relative;
  text-shadow: 0 0 0 ${props => props.theme.colors.inputText};
  transition: all 0.25s;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.inpurtPlaceholder};
  }

  :hover {
    border-color: ${props =>
      props.error
        ? props.theme.colors.accentAlt
        : props.theme.colors.inputBorder};
    cursor: pointer;
  }

  :focus {
    border-color: ${props =>
      props.error
        ? props.theme.colors.accentAlt
        : props.theme.colors.inputBorder};
    outline: 0;
  }
`;

export const InputIcon = styled(ReactSVG)`
  position: absolute;
  right: 1em;
`;

export const PickerCalendar = styled(Calendar)`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 0;
`;

export class DatePickerClass extends Component {
  constructor(props) {
    super(props);

    this.state = { calendarOpen: false };
  }

  closeCalendar() {
    if (!this.state.calendarOpen) return;

    const newState = { ...this.state, calendarOpen: false };
    this.setState(newState);
  }

  formatDate(date) {
    if (!date) return;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;

    return `${day}/${month}/${year}`;
  }

  handleClickOutside() {
    if (this.state.calendarOpen) this.closeCalendar();
  }

  openCalendar() {
    if (this.state.calendarOpen) return;

    const newState = { ...this.state, calendarOpen: true };
    this.setState(newState);
  }

  render() {
    const { id, label, updateValue, value } = this.props;

    return (
      <DatePickerContainer>
        <label>{label}</label>
        <InputContainer>
          <Input
            onClick={() => {
              this.refs.display.blur();
              this.openCalendar();
            }}
            placeholder={this.formatDate(new Date())}
            ref="display"
            type="text"
            value={this.formatDate(value)}
          />
          <InputIcon src={calendarIcon} />
          <PickerCalendar
            onChange={date => {
              this.closeCalendar();
              updateValue(id, date);
            }}
            show={this.state.calendarOpen}
            value={value}
          />
        </InputContainer>
      </DatePickerContainer>
    );
  }
}

DatePickerClass.propTypes = {
  active: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  setActive: PropTypes.func,
  setFieldValidity: PropTypes.func,
  updateValue: PropTypes.func,
  value: PropTypes.string
};

export const DatePicker = enhanceWithClickOutside(DatePickerClass);
