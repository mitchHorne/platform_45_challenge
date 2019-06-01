import React from "react";

export function boldString(string) {
  return <b>{string}</b>;
}

export function underlineString(string) {
  return <u>{string}</u>;
}

const defaultTransformations = {
  bold: boldString,
  underline: underlineString
};

// The *, transformations = defaultTransformations* part is added for dependecy injection purposes,
// making it easier to mock out the transformation functions
export function transformText(text, transformations = defaultTransformations) {
  const splitText = text.split("::");

  if (splitText.length === 1) return text;

  const transformedTextArray = splitText.map(string => {
    try {
      let { operations, text } = JSON.parse(string);

      // Format text acording to specifications provided in JSON
      operations.forEach(operation => {
        switch (operation) {
          case "bold":
            text = transformations.bold(text);
            break;
          case "underline":
            text = transformations.underline(text);
            break;
          default:
            break;
        }
      });

      return text;
    } catch (e) {
      return string;
    }
  });

  return transformedTextArray;
}
