export const checkValidateSignUp = (
  name,
  email,
  passwaord,
  confirmpassword
) => {
  const isNamevalid = /[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwaord);
  const isConfirmPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirmpassword);

  if (!isNamevalid) return "Please enter your full name";
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  if (!isConfirmPasswordValid) return "Password not match or InValid";
  if (passwaord !== confirmpassword) return "Password is not Match";

  return null;
};

export const checkValidateSignIn = (email, passwaord) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwaord);
  const isConfirmPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwaord);

  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
