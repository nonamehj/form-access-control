import { NavLink, Outlet } from "react-router-dom";
import "../components/form/recovery/SharedStyle.css";

const SharedLayoutFindPages = () => {
  return (
    <section className="section layout-section">
      <div className="layout-container form-container">
        <div className="find-links-wrapper">
          {/* <Link to="/login/find-id" className="find-id-link">
            아이디 찾기
          </Link>
          <Link to="/login/find-password" className="find-password-link">
            비밀번호 찾기
          </Link> */}
          <NavLink
            to="/login/find-id"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "grey",
                backgroundColor: isActive ? "#f2f2f2 " : "#fff",
              };
            }}
            className="find-id-link"
          >
            아이디 찾기
          </NavLink>
          <NavLink
            to="/login/find-password"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "grey",
                backgroundColor: isActive ? "#f2f2f2" : "#fff",
              };
            }}
            className="find-password-link"
          >
            비밀번호 찾기
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayoutFindPages;
