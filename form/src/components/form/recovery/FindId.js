import "./FindIdStyle.css";
const FindId = () => {
  return (
    <div className="layout-container form-container find-id-container">
      <h3 className="find-id-title form-title">아이디 찾기</h3>
      <form action="" className="find-id-form form">
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
        <button>아이디 찾기</button>
      </form>
    </div>
  );
};

export default FindId;
