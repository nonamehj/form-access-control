import { Link, Outlet } from "react-router-dom";

const SharedLayoutFindPages = () => {
  return (
    <section className="section layout-section">
      <div className="find-links-wrapper">
        <Link to="/login/find-id" className="find-id-link">
          아이디 찾기
        </Link>
        <Link to="/login/find-password" className="find-password-link">
          비밀번호 찾기
        </Link>
      </div>
      <Outlet />
    </section>
  );
};

export default SharedLayoutFindPages;
