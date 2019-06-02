import { formInputTypes } from "../../appData/types";
import * as validation from "../../utils/validation";

import maleIcon from "../../assets/male.svg";
import femalealeIcon from "../../assets/female.svg";
import membershipIcon from "../../assets/membership.svg";

export const submissionFormData = [
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
      { label: "Male", icon: maleIcon, value: "Male" },
      { label: "Female", icon: femalealeIcon, value: "Female" }
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
    id: "email",
    type: formInputTypes.TEXTBOX,
    label: "Email",
    required: true,
    placeholder: "me@mail.com",
    starting: "",
    validation: {
      error: "Invalid email address",
      func: validation.validateEmail
    }
  },
  {
    id: "mobile",
    type: formInputTypes.TEXTBOX,
    label: "Mobile",
    required: true,
    placeholder: "+91 98765 43210",
    starting: "",
    validation: {
      error: "Invalid mobile number",
      func: () => true
    }
  },
  {
    id: "custId",
    type: formInputTypes.TEXTBOX,
    label: "Customer ID",
    required: true,
    placeholder: "576802-ERD0348 45",
    starting: ""
  },
  {
    id: "member",
    type: formInputTypes.RADIO_BUTTONS,
    label: "MemberShip",
    required: false,
    starting: "Classic",
    options: [
      { label: "Classic", icon: membershipIcon, value: "Classic" },
      { label: "Silver", icon: membershipIcon, value: "Silver" },
      { label: "Gold", icon: membershipIcon, value: "Gold" }
    ]
  }
];
