import React from "react";

import { theme } from "../../../theme";
import * as utils from "../../../utils/testing";
import {
  DatePickerClass,
  DatePickerContainer,
  InputContainer,
  Input,
  InputIcon,
  PickerCalendar
} from "../";

describe("DatePickerClass", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<DatePickerClass />);
  });

  it("should call openCalendar if Input is clicked", () => {
    const openCalendarMock = jest.fn();
    const { openCalendar } = DatePickerClass.prototype;
    DatePickerClass.prototype.openCalendar = openCalendarMock;
    const wrapper = utils.generateEnzymeMountWrapper(<DatePickerClass />);

    utils.clickChildComponent(wrapper, Input);

    expect(openCalendarMock).toHaveBeenCalled();

    // reset openCalendar
    DatePickerClass.prototype.openCalendar = openCalendar;
  });

  it("should call closeCalendar and updateValue if PickerCalendar value changes", () => {
    const closeCalendarMock = jest.fn();
    const updateValueMock = jest.fn();
    const wrapper = utils.generateEnzymeWrapper(
      <DatePickerClass id="1" updateValue={updateValueMock} />
    );

    utils.mockComponentClassFunction(
      wrapper,
      "closeCalendar",
      closeCalendarMock
    );
    utils.changeChildComponent(wrapper, PickerCalendar, "new date");

    expect(closeCalendarMock).toHaveBeenCalled();
    expect(updateValueMock).toHaveBeenCalled();
    expect(updateValueMock).toHaveBeenCalledWith("1", "new date");
  });

  describe("closeCalendar", () => {
    it("should just exit if state.calendarOpen is false", () => {
      const setStateMock = jest.fn();
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);
      const initialVal = utils.getStateProperty(wrapper, "calendarOpen");

      utils.mockMountedComponentClassFunction(
        wrapper,
        "setState",
        setStateMock
      );
      utils.runComponentClassFunction(wrapper, "closeCalendar");

      expect(initialVal).toEqual(false);
      expect(setStateMock).not.toHaveBeenCalled();
    });

    it("should set state.calendarOpen to false", () => {
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);

      utils.updateState(wrapper, { calendarOpen: true });

      const initialVal = utils.getStateProperty(wrapper, "calendarOpen");

      utils.runComponentClassFunction(wrapper, "closeCalendar");

      const alteredVal = utils.getStateProperty(wrapper, "calendarOpen");

      expect(initialVal).toEqual(true);
      expect(alteredVal).toEqual(false);
    });
  });

  describe("formatDate", () => {
    it("should return nothing if provided date is falsy", () => {
      const received = utils.runComponentClassFunction(
        <DatePickerClass />,
        "formatDate"
      );

      expect(received).toBeUndefined();
    });

    it("should return a formatted date and add 0's to day and month if they're < 10", () => {
      const date = "2019-06-02T14:26:02.532Z";
      const expected = "02/06/2019";

      const received = utils.runComponentClassFunction(
        <DatePickerClass />,
        "formatDate",
        [new Date(date)]
      );

      expect(received).toEqual(expected);
    });

    it("should return a formatted date ", () => {
      const date = "2019-10-10T14:26:02.532Z";
      const expected = "10/10/2019";

      const received = utils.runComponentClassFunction(
        <DatePickerClass />,
        "formatDate",
        [new Date(date)]
      );

      expect(received).toEqual(expected);
    });
  });

  describe("handleClickOutside", () => {
    it("should call closeCalendar if calendar is open", () => {
      const closeCalendarMock = jest.fn();
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);

      utils.updateState(wrapper, { calendarOpen: true });
      utils.mockComponentClassFunction(
        wrapper,
        "closeCalendar",
        closeCalendarMock
      );
      utils.runComponentClassFunction(wrapper, "handleClickOutside");

      expect(closeCalendarMock).toHaveBeenCalled();
    });

    it("should do nothing is calendar is closed", () => {
      const closeCalendarMock = jest.fn();
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);

      utils.mockComponentClassFunction(
        wrapper,
        "closeCalendar",
        closeCalendarMock
      );
      utils.runComponentClassFunction(wrapper, "handleClickOutside");

      expect(closeCalendarMock).not.toHaveBeenCalled();
    });
  });

  describe("openCalendar", () => {
    it("should just exit if state.calendarOpen is true", () => {
      const setStateMock = jest.fn();
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);

      utils.updateState(wrapper, { calendarOpen: true });

      const initialVal = utils.getStateProperty(wrapper, "calendarOpen");

      utils.mockComponentClassFunction(wrapper, "setState", setStateMock);
      utils.runComponentClassFunction(wrapper, "openCalendar");

      expect(initialVal).toEqual(true);
      expect(setStateMock).not.toHaveBeenCalled();
    });

    it("should set state.calendarOpen to true", () => {
      const wrapper = utils.generateEnzymeWrapper(<DatePickerClass />);

      const initialVal = utils.getStateProperty(wrapper, "calendarOpen");

      utils.runComponentClassFunction(wrapper, "openCalendar");

      const alteredVal = utils.getStateProperty(wrapper, "calendarOpen");

      expect(initialVal).toEqual(false);
      expect(alteredVal).toEqual(true);
    });
  });

  describe("DatePickerContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<DatePickerContainer />);
    });
  });

  describe("InputContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<InputContainer />);
    });
  });

  describe("Input", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<Input />);
    });

    it("should have the correct properties from theme", () => {
      const component = <Input theme={theme} />;

      utils.testCssPropery(
        component,
        "background",
        theme.colors.inputBackground
      );

      utils.testCssPropery(
        component,
        "text-shadow",
        `0 0 0 ${theme.colors.inputText}`
      );

      utils.testCssModifierPropery(
        component,
        "color",
        theme.colors.inpurtPlaceholder,
        "::placeholder"
      );
    });

    it("should have the correct properties from if error is true", () => {
      const component = <Input error theme={theme} />;

      utils.testCssPropery(
        component,
        "border",
        `1.2px solid ${theme.colors.accentAlt}`
      );

      utils.testCssModifierPropery(
        component,
        "border-color",
        theme.colors.accentAlt,
        ":hover"
      );

      utils.testCssModifierPropery(
        component,
        "border-color",
        theme.colors.accentAlt,
        ":focus"
      );
    });

    it("should have the correct properties from if error is false", () => {
      const component = <Input theme={theme} />;

      utils.testCssPropery(component, "border", "1.2px solid transparent");

      utils.testCssModifierPropery(
        component,
        "border-color",
        theme.colors.inputBorder,
        ":hover"
      );

      utils.testCssModifierPropery(
        component,
        "border-color",
        theme.colors.inputBorder,
        ":focus"
      );
    });
  });

  describe("InputIcon", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<InputIcon />);
    });
  });

  describe("PickerCalendar", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<PickerCalendar />);
    });

    it("Should have a display property of block if show is truthy", () => {
      utils.testCssPropery(<PickerCalendar show />, "display", "block");
    });

    it("Should have a display property of none if show is falsy", () => {
      utils.testCssPropery(<PickerCalendar />, "display", "none");
    });
  });
});
