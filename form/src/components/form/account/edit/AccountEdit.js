import React from "react";
import "./AccountEditStyle.css";
import { useFormContext } from "./../../../../formContext";
const AccountEdit = () => {
  const { currentUser } = useFormContext();
  const {
    birth,
    email,
    gender,
    id,
    nationality,
    nickname,
    password,
    phone,
    telecom,
  } = currentUser;
  return (
    <section className="section register-section">
      <div className="register-container form-container">
        <h3 className="register-title form-title">회원가입</h3>
        <form
          action=""
          className="register-form"
          // onSubmit={onSubmit}
        >
          <div className="form-row-wrapper">
            <div className="form-row register-row">
              <div className="form-center form-center-id">
                <div className="form-label form-id">
                  <FaUser className="form-icon" />
                  <label htmlFor="id">아이디</label>
                </div>
                <input type="text" id="id" name="id" className="input-id" />
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
                  placeholder="숫자만 입력해주세요 ex)19190101"
                  className="input-birth"
                  // onChange={handleBirthChange}
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
                  {/* {telecomOptions.map((telecom) => {
                  return (
                    <option key={telecom.value} value={telecom.value}>
                      {telecom.label}
                    </option>
                  );
                })} */}
                </select>
              </div>

              <div className="form-center form-center-identity">
                <div className="group group-gender form-label">
                  <label htmlFor="male" className="radio-label">
                    남성
                  </label>
                  <input type="radio" id="male" name="gender" value="male" />

                  <label htmlFor="female" className="radio-label">
                    여성
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                </div>
                <div className="group group-nationality form-label">
                  <label htmlFor="korean" className="radio-label">
                    내국인
                  </label>
                  <input
                    type="radio"
                    id="korean"
                    name="nationality"
                    value="korean"
                  />
                  <label htmlFor="foreigner" className="radio-label">
                    외국인
                  </label>
                  <input
                    type="radio"
                    id="foreigner"
                    name="nationality"
                    value="foreigner"
                  />
                </div>
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
                  // onChange={handlePhoneChange}
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

export default AccountEdit;
