import "./NavbarStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, MdManageAccounts } from "../../utils/icons";
import { useFormContext } from "../../formContext";
import { useApiContext } from "./../../apiContext";
const Navbar = () => {
  const { currentUser, setCurrentUser } = useFormContext();
  const { handleResetStories } = useApiContext();
  // const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === "logout") {
      alert("로그아웃이 되었습니다. 다음에 또 만나요!");
      setCurrentUser({});
    }
    handleResetStories(type);
  };

  return (
    <nav>
      <div className="nav-container">
        <h2 className="nav-logo">
          <Link to="/" onClick={handleClick}>
            news
          </Link>
        </h2>
        {currentUser.loggedIn ? (
          <div className="nav-btn-wrapper">
            <p className="current-user">{`${currentUser.nickname} 님`}</p>
            <div className="nav-btn user-btn">
              {/* <button
                className="nav-profile-btn"
                onClick={() => navigate("/user")}
              >
                <MdManageAccounts className="profile-icon" />
              </button> */}
              <Link to="/user" className="nav-profile-btn">
                {" "}
                <MdManageAccounts className="profile-icon" />
              </Link>
            </div>
            <div className="nav-btn logout-btn">
              {/* <button className="nav-logout-btn" onClick={handleLogoutClick}>
                <FiLogOut className="logout-icon" />
              </button> */}
              <Link
                to="/"
                className="nav-logout-btn"
                onClick={() => handleClick("logout")}
              >
                <FiLogOut className="logout-icon" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="nav-btn-wrapper">
            {/* <button
              className="nav-login-btn"
              onClick={() => navigate("/login")}
            >
              login
            </button> */}
            <Link
              to="/login"
              onClick={() => handleClick("login")}
              className="nav-login-btn"
            >
              login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
