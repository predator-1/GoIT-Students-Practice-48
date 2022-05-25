/**
 * Create email field validation after pressing Enter
 * Prevent closing window
 */
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
function isEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email.toLowerCase());
}
