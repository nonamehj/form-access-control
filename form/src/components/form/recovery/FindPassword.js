import React from "react";
import "./FindPasswordStyle.css";
const FindPassword = () => {
  return (
    <div className="layout-container form-container find-password-container">
      <h3 className="find-id-title form-title">비밀번호 찾기</h3>
      <form className="find-password-form form">
        <div className="find-id-row-wrapper form-row-wrapper">
          <div className="form-row find-id-row">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row find-id-row">
            <label htmlFor="name">휴대전화 번호</label>
            <input type="text" id="name" name="name" />
          </div>
        </div>
        <button>비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default FindPassword;
