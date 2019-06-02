import React from "react";

import * as utils from "../../../utils/testing";
import { FormContainer, SubmissionForm } from "../";
import { DatePicker } from "../../datePicker";
import { Radio } from "../../radioButtons";
import { Textbox } from "../../textbox";

import { formInputTypes } from "../../../appData/types";

describe("SubmissionForm", () => {
  it("should render without crashing", () => {
    utils.testComponentRender(<SubmissionForm />);
  });

  it("should set it's state to the initial starting values of the fields", () => {
    const fields = [
      { id: "1", starting: "" },
      { id: "2", starting: "5" },
      { id: "3", starting: "Something", type: formInputTypes.RADIO_BUTTONS },
      { id: "4", required: false, type: formInputTypes.RADIO_BUTTONS },
      { id: "3", starting: "Something", type: formInputTypes.DATE },
      { id: "4", required: false, type: formInputTypes.DATE }
    ];
    const wrapper = utils.generateEnzymeWrapper(
      <SubmissionForm fields={fields} />
    );

    const expected = {
      1: { active: false, error: null, valid: false, value: "" },
      2: { active: false, error: null, valid: false, value: "5" },
      3: { active: false, error: null, valid: true, value: "Something" },
      4: { active: false, error: null, valid: true, value: undefined },
      3: { active: false, error: null, valid: true, value: "Something" },
      4: { active: false, error: null, valid: true, value: undefined }
    };
    const received = wrapper.state();

    expect(received).toEqual(expected);
  });

  describe("renderFormFields", () => {
    it("should return a span indicating no fields if there are no fields", () => {
      const wrapper = utils.generateEnzymeWrapper(<SubmissionForm />);
      const expected = <span>No fields provided</span>;

      const received = utils.runComponentClassFunction(
        wrapper,
        "renderFormFields"
      );

      expect(received).toEqual(expected);
    });

    it("should generate a renderable array of items based on the fields provided", () => {
      const fields = [
        {
          id: "name",
          type: formInputTypes.TEXTBOX,
          label: "Name",
          placeholder: "John Doe",
          required: true,
          starting: ""
        },
        {
          id: "gender",
          type: formInputTypes.RADIO_BUTTONS,
          label: "Gender",
          required: true,
          options: [
            { label: "Male", icon: "Icons", value: "Male" },
            { label: "Female", icon: "Icons", value: "Female" }
          ],
          starting: null
        },
        {
          id: "date",
          type: formInputTypes.DATE,
          label: "Date of Birth",
          required: true
        },
        {
          id: "bad data",
          type: "mismatch"
        }
      ];

      const wrapper = utils.generateEnzymeWrapper(
        <SubmissionForm fields={fields} />
      );

      const expected = [
        <Textbox
          active={wrapper.state().name.active}
          error={wrapper.state().name.error}
          key="TEXTBOX_INPUT_name"
          id="name"
          label="Name"
          placeholder={"John Doe"}
          required={true}
          setActive={wrapper.instance().setActive}
          setError={wrapper.instance().setError}
          setFieldValidity={wrapper.instance().setFieldValidity}
          updateValue={wrapper.instance().updateFieldValue}
          valid={wrapper.state().name.valid}
          validation={undefined}
          value={wrapper.state().name.value}
        />,
        <Radio
          id="gender"
          key={`RADIO_BUTTONS_INPUT_gender`}
          label="Gender"
          options={fields[1].options}
          setFieldValidity={wrapper.instance().setFieldValidity}
          updateValue={wrapper.instance().updateFieldValue}
          valid={wrapper.state().gender.valid}
          value={wrapper.state().gender.value}
        />,
        <DatePicker
          active={wrapper.state().name.active}
          error={wrapper.state().name.error}
          id="date"
          key="DATE_INPUT_date"
          label="Date of Birth"
          setActive={wrapper.instance().setActive}
          setFieldValidity={wrapper.instance().setFieldValidity}
          updateValue={wrapper.instance().updateFieldValue}
          value={wrapper.state().date.value}
        />,
        <span key="UNSUPPORTED_INPUT_bad data">Not implemented Yet</span>
      ];

      const received = utils.runComponentClassFunction(
        wrapper,
        "renderFormFields"
      );

      expect(received).toEqual(expected);
    });
  });

  describe("setActive", () => {
    it("should set the correct state object's active property to true depending on the provided id", () => {
      const fields = [{ id: "1", starting: "" }, { id: "2", starting: "5" }];
      const wrapper = utils.generateEnzymeWrapper(
        <SubmissionForm fields={fields} />
      );

      const expected = {
        1: { active: false, error: null, valid: false, value: "" },
        2: { active: true, error: null, valid: false, value: "5" }
      };

      utils.runComponentClassFunction(wrapper, "setActive", [2]);

      const newState = wrapper.state();

      expect(newState).toEqual(expected);
    });
  });

  describe("setError", () => {
    it("should set the correct state object's error property to the given error depending on the provided id ", () => {
      const fields = [{ id: "1", starting: "" }, { id: "2", starting: "5" }];
      const wrapper = utils.generateEnzymeWrapper(
        <SubmissionForm fields={fields} />
      );

      const expected = {
        1: { active: false, error: "Pear shapes", valid: false, value: "" },
        2: { active: false, error: null, valid: false, value: "5" }
      };

      utils.runComponentClassFunction(wrapper, "setError", [1, "Pear shapes"]);

      const newState = wrapper.state();

      expect(newState).toEqual(expected);
    });
  });

  describe("setFieldValidity", () => {
    it("should set the correct state object's valid property to the given parameter depending on the provided id", () => {
      const fields = [{ id: "1", starting: "" }, { id: "2", starting: "5" }];
      const wrapper = utils.generateEnzymeWrapper(
        <SubmissionForm fields={fields} />
      );

      const expected = {
        1: { active: false, error: null, valid: false, value: "" },
        2: { active: false, error: null, valid: true, value: "5" }
      };

      utils.runComponentClassFunction(wrapper, "setFieldValidity", [2, true]);

      const newState = wrapper.state();

      expect(newState).toEqual(expected);
    });
  });

  describe("updateFieldValue", () => {
    it("should update the correct state object's valid property to the given parameter depending on the provided id", () => {
      const fields = [{ id: "1", starting: "" }, { id: "2", starting: "5" }];
      const wrapper = utils.generateEnzymeWrapper(
        <SubmissionForm fields={fields} />
      );

      const expected = {
        1: {
          active: false,
          error: null,
          valid: false,
          value: "my awesome new value"
        },
        2: { active: false, error: null, valid: false, value: "5" }
      };

      utils.runComponentClassFunction(wrapper, "updateFieldValue", [
        1,
        "my awesome new value"
      ]);

      const newState = wrapper.state();

      expect(newState).toEqual(expected);
    });
  });

  describe("FormContainer", () => {
    it("should render without crashing", () => {
      utils.testComponentRender(<FormContainer />);
    });
  });
});
