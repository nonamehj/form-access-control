import { idRegex, pwRegex } from "./regex";

const validateDeleteForm = (userData, currentUser) => {
  /*아이디 빈값 확인 */
  if (!userData.id) {
    return "아이디를 입력해주세요";
  }
  /*아이디 형식 검사 */
  if (!idRegex.test(userData.id)) {
    return "아이디는 영문으로 입력해주세요";
  }

  if (!userData.password) {
    return "비밀번호를 입력해주세요";
  }
  if (!userData.password2) {
    return "비밀번호 확인을 입력해주세요";
  }
  /*비밀번호1 형식검사 */
  if (!pwRegex.test(userData.password)) {
    return "비밀번호 형식이 올바르지 않습니다";
  }
  /*비밀번호2 형식검사 */
  if (!pwRegex.test(userData.password2)) {
    return "비밀번호 확인 형식이 올바르지 않습니다";
  }
  /*비밀번호 일치 여부 확인 */
  if (userData.password !== userData.password2) {
    return "비밀번호가 일치하지 않습니다";
  }

  if (
    currentUser.id !== userData.id ||
    currentUser.password !== userData.password
  ) {
    return "아이디 또는 비밀번호가 일치하지 않습니다";
  }

  return null;
};

export { validateDeleteForm };
