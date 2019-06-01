import React, { Component } from "react";
import styled from "styled-components";

// import * as validation from "../../utils/validation";
import { Textbox } from "../textbox";

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
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Textbox label="Name" placeholder="John Doe" />
        <Textbox label="Email" placeholder="me@mail.com" />
        <Textbox label="Mobile" placeholder="+91 98765 43210" />
        <Textbox label="Customer ID" placeholder="576802-ERD0348 45" />
        <button type="submit">Submit</button>
      </FormContainer>
    );
  }
}
