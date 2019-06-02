import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";

export const RadioContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  label {
    padding-left: 0.75em;
  }

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
`;

export const RadioButtonOptionsContainer = styled.div`
  display: flex;
  padding: 1em 0;
  padding-right: 2em;
  width: 80%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0em 0 1em;
    width: 100%;
  }
`;

export const RadioButtonOption = styled.div`
  align-items: center;
  display: flex;
  padding-right: 2em;

  @media only screen and (max-width: 768px) {
    margin-top: 1em;
  }
`;

export const RadioButton = styled(ReactSVG)`
  align-items: center;
  background: ${props =>
    props.selected
      ? props.theme.colors.accentLight
      : props.theme.colors.radioUnselectedBackground};
  border-radius: 100%;
  display: flex;
  height: 2.5em;
  justify-content: center;
  transition: background 0.25s;
  width: 2.5em;

  svg {
    bottom: -3px;
    position: relative;

    g {
      stroke: ${props =>
        props.selected ? "white" : props.theme.colors.accentLight};
      transition: stroke 0.25s;
    }

    path {
      fill: ${props =>
        props.selected ? "white" : props.theme.colors.accentLight};
      transition: fill 0.25s;
    }
  }

  :hover {
    background: ${props => props.theme.colors.accentLight};
    cursor: pointer;

    svg g {
      stroke: white;
    }

    svg path {
      fill: white;
    }
  }
`;

export class Radio extends Component {
  renderOptions() {
    const {
      id,
      options,
      setFieldValidity,
      updateValue,
      valid,
      value: selected
    } = this.props;

    if (!options || !options.length) return <span>No options</span>;

    return options.map(option => {
      const { label, icon, value } = option;

      return (
        <RadioButtonOption key={`RADIO_BUTTON_OPTION_${value}`} value={value}>
          <RadioButton
            onClick={() => {
              if (!valid) setFieldValidity(id, true);
              updateValue(id, value);
            }}
            selected={value === selected}
            src={icon}
          />
          <label>{label}</label>
        </RadioButtonOption>
      );
    });
  }

  render() {
    return (
      <RadioContainer>
        <label>{this.props.label}</label>
        <RadioButtonOptionsContainer>
          {this.renderOptions()}
        </RadioButtonOptionsContainer>
      </RadioContainer>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  setFieldValidity: PropTypes.func,
  updateValue: PropTypes.func,
  value: PropTypes.string
};
