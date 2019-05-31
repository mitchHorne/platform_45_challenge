import { validateEmail } from "../Validation";

describe("Utils", () => {
  describe("validateEmail", () => {
    it("should return true if the email is valid", () => {
      const received = validateEmail("me@mail.com");
      expect(received).toEqual(true);
    });

    it("should return false if the email is invalid", () => {
      const received = validateEmail("Wrong email");
      expect(received).toEqual(false);
    });
  });
});
