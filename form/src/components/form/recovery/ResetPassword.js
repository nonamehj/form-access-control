import React, { useEffect } from "react";
import "./ResetPasswordStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import { resetFormatFormData } from "../../../utils/resetFormatFormData";
import validateResetForm from "../../../utils/validateResetForm";
import { useFormContext } from "./../../../formContext";
const ResetPassword = () => {
  const { handleSubmit } = useFormContext();
  const location = useLocation();
  const findUser = location.state;
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = resetFormatFormData(formData);
    const error = validateResetForm(userData);
    if (error) {
      alert(error);
      return;
    }

    const formResult = handleSubmit(e, "reset", formData, findUser);
    if (formResult) {
      alert("비밀번호를 변경하였습니다. 로그인 후 이용해 주세요");
      navigate("/login", { replace: true });
    }
  };
  useEffect(() => {
    if (!location.state) {
      navigate(-1);
    }
  }, [navigate, location.state]);
  //깜박임 방지
  if (!location.state) {
    return null;
  }

  return (
    <div className="layout-wrapper find-password-wrapper">
      <h3 className="find-password-title form-title">새 비밀번호 설정</h3>
      <form className="find-form form" onSubmit={onSubmit}>
        <div className="find-row-wrapper form-row-wrapper">
          <div className="form-row find-row">
            <label htmlFor="password">새 비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="password2">새 비밀번호 확인</label>
            <input type="password" id="password2" name="password2" />
          </div>
        </div>
        <div className="find-btn-wrapper">
          <button className="form-btn find-btn">비밀번호 변경하기</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
