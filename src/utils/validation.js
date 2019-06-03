export function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(String(email).toLowerCase());
}

export function validateMobile(mobile) {
  const mobileRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;

  return mobileRegex.test(String(mobile).toLowerCase());
}
