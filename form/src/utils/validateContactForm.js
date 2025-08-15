import { emailRegex } from "./regex";

const validateContactForm = (contactData) => {
  if (!contactData.name) {
    return "이름을 입력해주세요";
  }

  if (!contactData.email) {
    return "이메일을 입력해주세요";
  }
  if (!emailRegex.test(contactData.email)) {
    return "올바른 이메일 형식을 입력해주세요";
  }
  if (!contactData.subject) {
    return "제목을 입력해주세요";
  }
  if (!contactData.message) {
    return "메시지를 작성해주세요";
  }
  return null;
};

export default validateContactForm;
