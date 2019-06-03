import { validateEmail, validateMobile } from "../validation";

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

  describe("validateMobile", () => {
    it("should return true if the mobile number is valid", () => {
      const received = validateMobile("+27826986007");
      expect(received).toEqual(true);
    });

    it("should return false if the mobile number is invalid", () => {
      const received = validateMobile("+12Bad number456");
      expect(received).toEqual(false);
    });
  });
});
