import "./SharedStyle.css";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./../../../formContext";
import validateFindIdData from "../../../utils/validateFindIdData";
const FindId = () => {
  const { users } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);
    const error = validateFindIdData(userData);
    if (error) {
      alert(error);
      return;
    }
    const matchedUser = users.find(
      (user) => user.name === userData.name && user.phone === userData.phone && user.birth === userData.birth
    );
    if (!matchedUser) {
      alert("정보가 일치하지 않습니다");
      return;
    }

    alert(`아이디는 ${matchedUser.id} 입니다`);
    navigate("/login");
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 11) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }
    e.target.value = value;
  };

  const handleBirthChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length === 8) {
      value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6)}`;
    }
    e.target.value = value;
  };

  return (
    <div className="layout-wrapper find-id-wrapper">
      <h3 className="find-id-title form-title">아이디 찾기</h3>
      <form className="find-form form" onSubmit={onSubmit}>
        <div className="find-row-wrapper form-row-wrapper">
          <div className="form-row find-row">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-row find-row">
            <label htmlFor="birth">생년월일</label>
            <input type="text" id="birth" name="birth" placeholder="숫자만 입력해주세요" maxLength={10} onChange={handleBirthChange}/>
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
          <button
            type="button"
            className="form-btn back-btn"
            onClick={() => navigate("/login")}
          >
            뒤로가기
          </button>
          <button className="form-btn find-btn">아이디 찾기</button>
        </div>
      </form>
    </div>
  );
};

export default FindId;
