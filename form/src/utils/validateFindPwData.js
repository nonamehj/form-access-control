import { idRegex, nameRegex } from "./regex";
const validateFindPwData = (userData) => {
  const { name, id, phone } = userData;
  if (!name) {
    return "이름을 입력해주세요";
  }
  if (!nameRegex.test(name)) {
    return "이름은 한글 또는 영문으로 입력해주세요";
  }
  if (!id) {
    return "아이디를 입력해주세요";
  }
  if (!idRegex.test(id)) {
    return "아이디 형식이 올바르지 않습니다";
  }
  if (!phone) {
    return "휴대전화 번호를 입력해주세요";
  }
  if (!phone || phone.length !== 13) {
    return "휴대전화 번호는 숫자만 11자리로 입력해주세요 (예: 01012345678)";
  }
  return null;
};

export default validateFindPwData;
