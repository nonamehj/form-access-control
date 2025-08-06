import { useNavigate } from "react-router-dom";
import "./SharedStyle.css";
const FindId = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

  return (
    <div className="layout-wrapper find-id-wrapper">
      <h3 className="find-id-title form-title">아이디 찾기</h3>
      <form className="find-form form">
        <div className="find-row-wrapper form-row-wrapper">
          <div className="form-row find-row">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="phone">휴대전화 번호</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-input input-phone"
              maxLength={13}
            />
          </div>
        </div>
        <div className="find-btn-wrapper">
          <button className="form-btn" onClick={() => navigate("/login")}>
            뒤로가기
          </button>
          <button className="form-btn">아이디 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default FindId;
