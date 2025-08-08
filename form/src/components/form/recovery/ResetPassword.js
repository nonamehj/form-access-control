import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetFormatFormData } from "../../../utils/resetFormatFormData";
import validateResetForm from "../../../utils/validateResetForm";
import "./ResetPasswordStyle.css";
import { useFormContext } from "./../../../formContext";
const ResetPassword = () => {
  const { handleSubmit } = useFormContext();
  const location = useLocation();
  let matchedUser = location.state;
  const navigate = useNavigate();
  // console.log("location", location.state);
  console.log("matchedUser", matchedUser);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = resetFormatFormData(formData);
    console.log("reset", userData);
    console.log("cha Pw", userData.password);
    const error = validateResetForm(userData);
    if (error) {
      alert(error);
      return;
    }
    const changeUserPw = { ...{ matchedUser } };
    console.log("checked", changeUserPw);
    const formResult = handleSubmit(e, "reset", formData, matchedUser);
    if (formResult) {
      alert("비밀번호를 변경하였습니다. 로그인 후 이용해 주세요");
      navigate("/login", { replace: true });
    }
  };
  // if(location.state === null) {
  //   return null
  // }
  return (
    <div className="layout-wrapper find-password-wrapper">
      <h3 className="find-password-title form-title">비밀번호 변경</h3>
      <form className="find-form form" onSubmit={onSubmit}>
        <div className="find-row-wrapper form-row-wrapper">
          <div className="form-row find-row">
            <label htmlFor="password">변경할 비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="password2">비밀번호 확인</label>
            <input type="password" id="password2" name="password2" />
          </div>
        </div>
        <div className="find-btn-wrapper">
          <button className="form-btn find-btn">비밀번호 변경</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
