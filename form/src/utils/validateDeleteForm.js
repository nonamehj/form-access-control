import { idRegex, pwRegex } from "./regex";

const validateDeleteForm = (userData, currentUser) => {
  if (!userData.id) {
    return "아이디를 입력해주세요";
  }
  /*문구 수정하기 */
  if (!idRegex.test(userData.id)) {
    return "영문으로 작성";
  }
  if (!userData.password || !userData.password2) {
    return "비밀번호를 입력해주세요";
  }
  if (currentUser.id !== userData.id) {
    return "아이디가 일치하지 않습니다";
  }
  if (currentUser.password !== userData.password) {
    return "비밀번호가 일치하지 않습니다";
  }
  if (userData.password !== userData.password2) {
    return "비밀번호가 일치하지 않습니다";
  }
  return null;
};

export { validateDeleteForm };
