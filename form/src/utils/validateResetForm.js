import { pwRegex } from "./regex";
const validateResetForm = (userData) => {
  const { password, password2 } = userData;

  if (!password) {
    return "비밀번호를 입력해주세요";
  }
  if (!pwRegex.test(password)) {
    return "비밀번호는 8~20자, 영문과 숫자를 포함해야 합니다";
  }
  if (!password2) {
    return "2차 비밀번호를 입력해주세요";
  }
  if (password !== password2) {
    return "비밀번호가 일치하지 않습니다";
  }
  return null;
};

export default validateResetForm;
