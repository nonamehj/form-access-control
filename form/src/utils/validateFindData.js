import { koreanNameRegex } from "./regex";

const validateFindUserData = (formData) => {
  /*validateFindIdData 로 할경우 이거 삭제하지 */
  const userData = Object.fromEntries(formData);
  if (!userData.name) {
    return "이름을 입력하세요";
  }
  if (!koreanNameRegex.test(userData.name)) {
    return "올바르게 이름을 입력하세요";
  }
  if (!userData.phone) {
    return "올바르게 - 없이 숫자만 11자리 입력해주세요";
  }
  if (!userData.phone || userData.phone.length !== 13) {
    return "휴대전화 번호는 11자리여야 합니다";
  }

  return null;
};

export default validateFindUserData;
