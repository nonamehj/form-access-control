import { NavLink, Outlet } from "react-router-dom";
import "../components/form/recovery/SharedStyle.css";

const SharedLayoutFindPages = () => {
  return (
    <section className="section layout-section">
      <div className="layout-container form-container">
        <div className="find-links-wrapper">
          <NavLink
            to="/login/find-id"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fff" : "#495057",
                backgroundColor: isActive ? "#495057 " : "#dee2e6",
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
                color: isActive ? "#fff" : "#495057",
                backgroundColor: isActive ? "#495057 " : "#dee2e6",
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
