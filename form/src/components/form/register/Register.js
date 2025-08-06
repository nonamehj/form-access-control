import React, { useEffect } from "react";
import "./RegisterStyle.css";
import {
  AiOutlinePhone,
  RiLockPasswordLine,
  BsCalendarDate,
  BsPhone,
  FaUser,
  FaRegAddressCard,
  MdEmail,
} from "../../../utils/icons";
import { useFormContext } from "./../../../formContext";
import { useNavigate } from "react-router-dom";
import { formatFormData, validateUserData } from "../../../utils";
const groups = [
  {
    name: "gender",
    options: [
      { label: "남자", value: "male" },
      { label: "여자", value: "female" },
    ],
  },
  {
    name: "nationality",
    options: [
      { label: "내국인", value: "korean" },
      { label: "외국인", value: "foreigner" },
    ],
  },
];

const telecomOptions = [
  { value: "", label: "선택" },
  { value: "skt", label: "skt" },
  { value: "skt_mvno", label: "skt 알뜰폰" },
  { value: "kt", label: "kt" },
  { value: "kt_mvno", label: "kt 알뜰폰" },
  { value: "lg", label: "lg" },
  { value: "lg_mvno", label: "lg 알뜰폰" },
];
const Register = () => {
  const { handleSubmit, agreement, users } = useFormContext();
  const navigate = useNavigate("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = formatFormData(formData);
    // const userData = Object.fromEntries(formData);
    console.log("regi", userData);
    const error = validateUserData(userData, users);
    if (error) {
      alert(error);
      return;
    }
    const formResult = handleSubmit(e, "register", formData);

    console.log("register 컴포넌트 ", formResult);
    if (formResult) {
      navigate("/");
    }
  };

  const handleBirthChange = (e) => {
    // e.target.value = e.target.value.replace(/\D/g, "");
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 8) {
      value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6)}`;
    }
    e.target.value = value;
  };
  const handleBirthBlur = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 8) {
      e.target.value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(
        6
      )}`;
    }
  };
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    // if (value.length === 11) {
    //   value = value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    // }
    if (value.length === 11) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }
    e.target.value = value;
  };

  const handlePhoneBlur = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      e.target.value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(
        7
      )}`;
    }
  };

  // const validateIdInput = (value) => {
  //   const value = e.target.value;
  //   const validIdRegex = /^[a-z]/;
  //   if (!validIdRegex.test(value)) {
  //     alert("아이디는 소문자로 입력해주세요");
  //     return false;
  //   }
  //   return true;
  // };
  useEffect(() => {
    if (!agreement) {
      alert("회원가입을 위해서는 약관 동의가 필요합니다");
      navigate("/login/agree");
    }
  }, [agreement, navigate]);
  return (
    <section className="section register-section form-section">
      <div className="register-container form-container">
        <h3 className="register-title form-title">회원가입</h3>
        <form className="register-form form" onSubmit={onSubmit}>
          <div className="form-row-wrapper register-row-wrapper">
            <div className="form-row register-row">
              <div className="form-center form-center-name">
                <div className="form-label form-name">
                  <FaUser className="form-icon" />
                  <label htmlFor="name">이름</label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-name"
                />
              </div>
              <div className="form-center form-center-id">
                <div className="form-label form-id">
                  <FaUser className="form-icon" />
                  <label htmlFor="id">아이디</label>
                </div>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="아이디는 4~16자 입력해주세요"
                  className="input-id"
                  onChange={(e) => e.target.value.toLowerCase()}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </div>

              <div className="form-center form-center-password">
                <div className="form-label form-password">
                  <RiLockPasswordLine className="form-icon" />
                  <label htmlFor="password">비밀번호</label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input input-password"
                  placeholder="8~20자 영문과 숫자를 포함해야 합니다"
                />
              </div>
              <div className="form-center form-center-email">
                <div className="form-label form-email">
                  <MdEmail className="form-icon" />
                  <label htmlFor="email">이메일</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input input-email"
                  // placeholder="이메일주소 (비밀번호 찾기 등 본인 확인용)"
                  placeholder="비밀번호 찾기 등 본인 확인용"
                  onChange={(e) => e.target.value.toLowerCase()}
                  autoCapitalize="off"
                  autoCorrect="off"
                />
              </div>
            </div>
            <div className="form-row register-row">
              <div className="form-center form-center-nickname">
                <div className="form-label form-nickname">
                  <FaRegAddressCard className="form-icon" />
                  <label htmlFor="nickname">닉네임</label>
                </div>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  className="form-input input-nickname"
                />
              </div>
              <div className="form-center form-center-birth">
                <div className="form-label form-birth">
                  <BsCalendarDate className="form-icon" />
                  <label htmlFor="birth">생년월일</label>
                </div>
                <input
                  type="text"
                  name="birth"
                  placeholder="숫자만 입력해주세요 ex) 20250101"
                  className="input-birth"
                  onChange={handleBirthChange}
                  // onBlur={handleBirthBlur}
                  maxLength={10}
                />
              </div>

              <div className="form-center form-center-telecom">
                <div className="form-label form-telecom">
                  <BsPhone className="form-icon" />
                  <label htmlFor="telecom">통신사선택</label>
                </div>

                <select className="form-select" id="telecom" name="telecom">
                  {telecomOptions.map((telecom) => {
                    return (
                      <option key={telecom.value} value={telecom.value}>
                        {telecom.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-center form-center-identity">
                <div className="group group-gender form-label">
                  <label htmlFor="male" className="radio-label">
                    <input type="radio" id="male" name="gender" value="male" />
                    <span>남성</span>
                  </label>
                  <label htmlFor="female" className="radio-label">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <span>여성</span>
                  </label>
                </div>
                <div className="group group-nationality form-label">
                  <label htmlFor="korean" className="radio-label">
                    <input
                      type="radio"
                      id="korean"
                      name="nationality"
                      value="korean"
                      defaultChecked
                    />
                    <span>내국인</span>
                  </label>
                  <label htmlFor="foreigner" className="radio-label">
                    <input
                      type="radio"
                      id="foreigner"
                      name="nationality"
                      value="foreigner"
                    />
                    <span>외국인</span>
                  </label>
                </div>
                {/* {groups.map((group) => {
                  return (
                    <div
                      key={group.name}
                      className={`group group-${group.name} form-label form-${group.name}`}
                    >
                      {group.options.map((option) => {
                        return (
                          <label
                            key={option.value}
                            className={`radio-label radio-${option.value}`}
                          >
                            <input
                              type="radio"
                              name={group.name}
                              value={option.value}
                              defaultChecked={
                                group.name === "nationality" &&
                                option.value === "korean"
                              }
                             
                            />
                            <span>{option.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  );
                })} */}
              </div>

              <div className="form-center form-center-phone">
                <div className="form-label form-phone">
                  <AiOutlinePhone className="form-icon" />
                  <label htmlFor="phone">휴대전화 번호</label>
                </div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-input input-phone"
                  placeholder="숫자만 입력하세요"
                  onChange={handlePhoneChange}
                  // onBlur={handlePhoneBlur}
                  maxLength={13}
                />
              </div>
            </div>
          </div>
          <button className="register-btn form-btn">회원가입</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
