import React from "react";
import "./LoginStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "./../../../formContext";
const Login = () => {
  const { handleSubmit } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    const formData = new FormData(e.currentTarget);

    const formResult = handleSubmit(e, "login", formData);
    if (formResult) {
      navigate("/");
    }
  };
  return (
    <section className="section login-section">
      <div className="login-container form-container">
        <h3 className="login-title form-title">로그인</h3>
        <form className="login-form form" onSubmit={onSubmit}>
          <div className="login-row-wrapper form-row-wrapper">
            <div className="form-row login-row">
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" name="id" />
            </div>
            <div className="form-row login-row">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" />
            </div>
          </div>
          <button className="login-btn form-btn">로그인</button>

          <div className="login-register-wrapper">
            <p className="login-readme">계정이 없으신가요? </p>
            <Link to="/login/agree" className="login-register">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
