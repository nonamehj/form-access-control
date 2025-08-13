import { nameRegex } from "./regex";

const validateFindIdData = (userData) => {
  const { name, phone, birth } = userData;
  if (!name) {
    return "이름을 입력해주세요";
  }

  if (!nameRegex.test(name)) {
    return "이름은 한글 또는 영문으로 입력해주세요";
  }

  if (!birth) {
    return "생년월일을 입력해주세요";
  }

  if (!phone) {
    return "휴대전화 번호를 입력해주세요";
  }
  if (!phone || phone.length !== 13) {
    return "휴대전화 번호는 숫자만 11자리로 입력해주세요 (예: 01012345678)";
  }

  return null;
};

export default validateFindIdData;
