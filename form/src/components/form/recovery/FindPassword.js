import "./FindPasswordStyle.css";
import { useFormContext } from "./../../../formContext";
import { useNavigate, Link } from "react-router-dom";
import validateFindPwData from "./../../../utils/validateFindPwData";
const FindPassword = () => {
  const { users } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData);
    const error = validateFindPwData(userData);
    if (error) {
      alert(error);
      return;
    }
    const matchedUser = users.find(
      (user) =>
        user.name === userData.name &&
        user.id === userData.id &&
        user.phone === userData.phone
    );
    if (!matchedUser) {
      alert("정보가 일치하지 않습니다");
      return;
    }
    navigate("/login/reset-password", {
      // state: {  findUser: matchedUser },
      state: matchedUser,
      replace: true,
    });
  };
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }
    e.target.value = value;
  };
  return (
    <div className="layout-wrapper find-password-wrapper">
      <h3 className="find-password-title form-title">비밀번호 찾기</h3>
      <form className="find-form form" onSubmit={onSubmit}>
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
            <label htmlFor="phone">휴대전화 번호</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-input input-phone"
              placeholder="숫자만 입력하세요"
              onChange={handlePhoneChange}
              maxLength={13}
            />
          </div>
        </div>
        <div className="find-btn-wrapper">
          {/* <button className="form-btn" onClick={() => navigate("/login")}>
            뒤로가기
          </button> */}
          <Link to="/login" className="form-btn">
            뒤로가기
          </Link>
          <button className="form-btn find-btn">비밀번호 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default FindPassword;
