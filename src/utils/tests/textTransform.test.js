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
        "String not to be split ",
        <u>
          <b>Transformed</b>
        </u>,
        ""
      ];

      const received = transformText(string, mockTransformers);

      expect(received).toEqual(expected);
      expect(mockTransformers.bold).toHaveBeenCalled();
      expect(mockTransformers.bold).toHaveBeenCalledWith("Transformed");
      expect(mockTransformers.underline).toHaveBeenCalled();
      expect(mockTransformers.underline).toHaveBeenCalledWith(
        <b>Transformed</b>
      );
    });
  });

  describe("boldString", () => {
    it("should return a string with encapsulating <b> tags", () => {
      const string = "My awesome string";
      const expected = <b>{string}</b>;

      const received = boldString(string);

      expect(received).toEqual(expected);
    });
  });

  describe("underlineString", () => {
    it("should return a string with encapsulating <u> tags", () => {
      const string = "My awesome string";
      const expected = <u>{string}</u>;

      const received = underlineString(string);

      expect(received).toEqual(expected);
    });
  });
});
