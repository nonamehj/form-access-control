import React from "react";
import { useNavigate } from "react-router-dom";
import "./FindPasswordStyle.css";
const FindPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-wrapper find-password-wrapper">
      <h3 className="find-password-title form-title">비밀번호 찾기</h3>
      <form className="find-form form">
        <div className="find-row-wrapper form-row-wrapper">
          <div className="form-row find-row">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" name="id" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="name">휴대전화 번호</label>
            <input type="text" id="name" name="name" />
          </div>
        </div>
        <div className="find-btn-wrapper">
          <button className="form-btn" onClick={() => navigate("/login")}>
            뒤로가기
          </button>
          <button className="form-btn">비밀번호 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default FindPassword;
