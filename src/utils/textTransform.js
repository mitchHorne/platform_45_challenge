import React from "react";

export function boldString(string, index) {
  return <b key={`TEXT_TRANSFORMED_BOLD_STRING_${index}`}>{string}</b>;
}

export function underlineString(string, index) {
  return <u key={`TEXT_TRANSFORMED_UNDERLINED_STRING_${index}`}>{string}</u>;
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

  const transformedTextArray = splitText.map((string, index) => {
    try {
      let { operations, text } = JSON.parse(string);

      // Format text acording to specifications provided in JSON
      operations.forEach(operation => {
        switch (operation) {
          case "bold":
            text = transformations.bold(text, index);
            break;
          case "underline":
            text = transformations.underline(text, index);
            break;
          default:
            break;
        }
      });

      return text;
    } catch (e) {
      return <span key={`TEXT_TRANSFORMED_STRING_${index}`}>{string}</span>;
    }
  });

  return transformedTextArray;
}
