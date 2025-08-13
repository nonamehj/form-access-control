import React, { useState } from "react";
import "./EditUserFormStyle.css";
import { useFormContext } from "./../../../../formContext";
import { useNavigate } from "react-router-dom";
import { validateUserData } from "../../../../utils";
import {
  FaUser,
  FaRegAddressCard,
  MdEmail,
  BsCalendarDate,
  BsPhone,
  RiLockPasswordLine,
  AiOutlinePhone,
  FaIdBadge,
} from "../../../../utils/icons";

const telecomOptions = [
  { value: "", label: "선택" },
  { value: "skt", label: "skt" },
  { value: "skt_mvno", label: "skt 알뜰폰" },
  { value: "kt", label: "kt" },
  { value: "kt_mvno", label: "kt 알뜰폰" },
  { value: "lg", label: "lg" },
  { value: "lg_mvno", label: "lg 알뜰폰" },
];

const EditUserForm = () => {
  const { currentUser, handleSubmit } = useFormContext();
  const navigaate = useNavigate();
  const [editUser, setEditUser] = useState({
    birth: currentUser.birth,
    email: currentUser.email,
    gender: currentUser.gender || "",
    id: currentUser.id,
    name: currentUser.name,
    nationality: currentUser.nationality || "",
    nickname: currentUser.nickname,
    password: "",
    phone: currentUser.phone,
    telecom: currentUser.telecom,
  });
  const onSubmit = (e) => {
    e.preventDefault();

    const error = validateUserData(editUser);
    if (error) {
      alert(error);
      return;
    }
    const formResult = handleSubmit(e, "edit", editUser);
    if (formResult) {
      alert("회원정보를 수정되었습니다");
      navigaate("/user", { replace: true });
    } else {
      alert("수정에 실패했습니다. 다시 시도해주세요");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = name === "phone" ? value.replace(/\D/g, "") : value;
    if (name === "phone") {
      const digits = newValue.replace(/\D/g, "");

      if (digits.length === 11) {
        newValue = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(
          7
        )}`;
      } else {
        newValue = digits;
      }
    }
    setEditUser((prev) => ({ ...prev, [name]: newValue }));
  };

  const handlePhoneBlur = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      e.target.value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(
        7
      )}`;
    }
  };
  return (
    <section className="section edit-section form-section">
      <div className="edit-container form-container">
        <h3 className="edit-title form-title">내 정보 수정</h3>
        <form className="edit-form form" onSubmit={onSubmit}>
          <div className="form-row-wrapper edit-row-wrapper">
            <div className="form-row edit-row">
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
                  value={editUser.name}
                  readOnly
                />
              </div>
              <div className="form-center form-center-id">
                <div className="form-label form-id">
                  <FaIdBadge className="form-icon" />
                  <label htmlFor="id">아이디</label>
                </div>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="input-id"
                  value={editUser.id}
                  readOnly
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
                  value={editUser.password}
                  onChange={handleChange}
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
                  value={editUser.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row edit-row">
              <div className="form-center form-center-nickname">
                <div className="form-label form-nickname">
                  <FaRegAddressCard className="form-icon" />
                  <label htmlFor="nickname">닉네임</label>
                </div>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={editUser.nickname}
                  onChange={handleChange}
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
                  value={editUser.birth}
                  className="input-birth"
                  readOnly
                />
              </div>

              <div className="form-center form-center-telecom">
                <div className="form-label form-telecom">
                  <BsPhone className="form-icon" />
                  <label htmlFor="telecom">통신사선택</label>
                </div>

                <select
                  className="form-select"
                  id="telecom"
                  name="telecom"
                  value={editUser.telecom}
                  onChange={handleChange}
                >
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
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={editUser.gender === "male"}
                      readOnly
                    />
                    <span>남성</span>
                  </label>
                  <label htmlFor="female" className="radio-label">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={editUser.gender === "female"}
                      readOnly
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
                      checked={editUser.nationality === "korean"}
                      readOnly
                    />
                    <span>내국인</span>
                  </label>
                  <label htmlFor="foreigner" className="radio-label">
                    <input
                      type="radio"
                      id="foreigner"
                      name="nationality"
                      value="foreigner"
                      checked={editUser.nationality === "foreigner"}
                      readOnly
                    />
                    <span>외국인</span>
                  </label>
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
                  value={editUser.phone}
                  onChange={handleChange}
                  // onBlur={handlePhoneBlur}
                  maxLength={13}
                />
              </div>
            </div>
          </div>
          <div className="edit-btns-container">
            <button
              type="button"
              onClick={() => navigaate(-1)}
              className="form-btn edit-back-btn"
            >
              취소
            </button>
            <button className="edit-btn form-btn">수정완료</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditUserForm;
