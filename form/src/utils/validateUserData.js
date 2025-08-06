import {
  idRegex,
  pwRegex,
  emailRegex,
  nicknameRegex,
  koreanNameRegex,
  englishNameRegex,
} from "./regex";

const validateUserData = (userData, users = []) => {
  if (!userData.name) {
    return "이름을 입력해 주세요";
  }

  // if (!nameRegex.test(userData.name)) {
  //   return "올바른 이름을 입력해주세요"
  // }
  if (/\s/.test(userData.name)) {
    return "이름에 공백 없이 입력해 주세요";
  }
  if (
    userData.nationality === "korean" &&
    !koreanNameRegex.test(userData.name)
  ) {
    return "이름은 한글로 2자 이상 올바르게 입력해 주세요";
  }
  if (
    userData.nationality === "foreigner" &&
    !englishNameRegex.test(userData.name)
  ) {
    return "이름은 영문으로 2자 이상 올바르게 입력해 주세요";
  }
  if (!userData.id || !idRegex.test(userData.id)) {
    return "아이디는 소문자 4~16자여야 합니다";
  }
  const isDuplicateId = users.some((user) => user.id === userData.id);

  if (isDuplicateId) {
    return "이미 사용중인 아이디입니다";
  }
  if (!userData.password || !pwRegex.test(userData.password)) {
    return "비밀번호는 8~20자, 영문과 숫자를 포함해야 합니다";
  }
  if (!userData.email || !emailRegex.test(userData.email)) {
    return "유효한 이메일 형식을 입력해주세요";
  }
  if (!userData.nickname || !nicknameRegex.test(userData.nickname)) {
    return "닉네임은 2~10자, 한글, 영문, 숫자만 가능합니다";
  }
  if (!userData.birth) return "생년월일을 입력하세요";
  if (!userData.telecom) return "통신사를 선택하세요";
  if (!userData.gender) return "성별을 선택하세요";
  if (!userData.phone || userData.phone.length !== 13) {
    return "휴대전화 번호는 11자리여야 합니다";
  }
  return null;
};

export { validateUserData };
