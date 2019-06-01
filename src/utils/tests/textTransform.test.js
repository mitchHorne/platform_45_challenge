import React from "react";

import { boldString, underlineString, transformText } from "../textTransform";

describe("textTransform", () => {
  describe("transformText", () => {
    it("should return the passed string if there is no :: seperators in the given string", () => {
      const string = "String not to be split";

      const received = transformText(string);

      expect(received).toEqual(string);
    });

    it("should return an array matching the expected array, and call the correct functions depending on specified operations", () => {
      const mockTransformers = {
        bold: jest.fn(param => <b>{param}</b>),
        underline: jest.fn(param => <u>{param}</u>)
      };
      const jsonString = JSON.stringify({
        operations: ["bold", "underline", "unmatched"],
        text: "Transformed"
      });
      const string = `String not to be split ::${jsonString}::`;

      const expected = [
        <span key={`TEXT_TRANSFORMED_STRING_${0}`}>
          {"String not to be split "}
        </span>,
        <u>
          <b>Transformed</b>
        </u>,
        <span key={`TEXT_TRANSFORMED_STRING_${2}`}>{""}</span>
      ];

      const received = transformText(string, mockTransformers);

      expect(received).toEqual(expected);

      const { bold: boldMock, underline: underlineMock } = mockTransformers;

      expect(boldMock).toHaveBeenCalled();
      expect(boldMock).toHaveBeenCalledWith("Transformed", 1);
      expect(underlineMock).toHaveBeenCalled();
      expect(underlineMock).toHaveBeenCalledWith(<b>Transformed</b>, 1);
    });
  });

  describe("boldString", () => {
    it("should return a string with encapsulating <b> tags", () => {
      const string = "My awesome string";
      const expected = <b key={`TEXT_TRANSFORMED_BOLD_STRING_0`}>{string}</b>;

      const received = boldString(string, 0);

      expect(received).toEqual(expected);
    });
  });

  describe("underlineString", () => {
    it("should return a string with encapsulating <u> tags", () => {
      const string = "My awesome string";
      const expected = (
        <u key={`TEXT_TRANSFORMED_UNDERLINED_STRING_0`}>{string}</u>
      );

      const received = underlineString(string, 0);

      expect(received).toEqual(expected);
    });
  });
});
