export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const regexError = "Please Enter valid Email Address";
export const upperCaseRegex = /[A-Z]/;
export const specialCharacterRegex = /[!@#$%^&*]/;
export const numberRegex = /[0-9]/;
export const onlyNumberRegex = /^[0-9]*$/;
export const withoutNumberRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/;
export const withoutSpecialRegex = /^(?=.*[A-Z])(?=.*[0-9]).*$/;
export const withoutUppercaseRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
export const passwordRegexer = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;

export const phoneNumberRegex = /^[+0-9][0-9]*$/;
export const saudiPhoneNumberRegex = /^(?:\+?966|00966|0)?\s?5[0-9]{8}$/;
export const phoneRegexError = "Please enter A Valid phone number";






