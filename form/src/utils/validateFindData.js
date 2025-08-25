import { koreanNameRegex } from "./regex";

const validateFindUserData = (formData) => {
  const userData = Object.fromEntries(formData);
  if (!userData.name) {
    return "이름을 입력해주세요";
  }
  if (!koreanNameRegex.test(userData.name)) {
    return "올바른 이름을 입력해주세요";
  }
  if (!userData.phone) {
    return "휴대전화 번호를 입력해주세요";
  }
  if (!userData.phone || userData.phone.length !== 13) {
    return "휴대전화 번호는 11자리 숫자여야 합니다";
  }

  return null;
};

export default validateFindUserData;
