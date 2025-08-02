import "./DeleteUserFormStyle.css";
import { useFormContext } from "./../../../../formContext";
import { useNavigate } from "react-router-dom";
import { formatFormData, validateDeleteForm } from "../../../../utils";
const DeleteUserForm = () => {
  const { handleSubmit, currentUser } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = formatFormData(formData);
    const error = validateDeleteForm(userData, currentUser);
    console.log("delete", userData);
    if (error) {
      alert(error);
      return;
    }
    const formResult = handleSubmit(e, "delete", formData);
    if (formResult) {
      alert("회원정보를 탈퇴하였습니다");
      navigate("/");
    }
  };

  return (
    <section className="section delete-section">
      <div className="delete-container form-container">
        <h3 className="delete-title form-title">회원탈퇴</h3>
        <form className="delete-form form" onSubmit={onSubmit}>
          <div className="delete-row-wrapper form-row-wrapper">
            <div className="form-row delete-row">
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" name="id" />
            </div>
            <div className="form-row delete-row">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-row delete-row">
              <label htmlFor="password2">비밀번호 확인</label>
              <input
                type="password"
                id="password2"
                name="password2"
                placeholder="비밀번호를 다시 입력하세요"
              />
            </div>
          </div>
          <button className="delete-btn form-btn">회원탈퇴</button>
        </form>
      </div>
    </section>
  );
};

export default DeleteUserForm;
