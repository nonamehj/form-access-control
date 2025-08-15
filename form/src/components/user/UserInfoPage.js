import "./UserInfoPageStyle.css";
import {
  AiOutlineMail,
  FaUserCircle,
  FaEdit,
  FaUserSlash,
} from "../../utils/icons";
import { useFormContext } from "./../../formContext";
import { Link } from "react-router-dom";
const UserInfoPage = () => {
  const { currentUser } = useFormContext();
  return (
    <section className="section user-info-section">
      <div className="user-info-container">
        <div className="user-info-profile">
          <FaUserCircle className="user-icon" />
          <div className="user-info-nickname">
            <span>{currentUser.nickname}</span>
          </div>
        </div>

        <div className="user-information-links">
          <Link to="/user/edit">
            <FaEdit className="edit-icon" /> <span>개인정보 수정</span>
          </Link>
          <Link to="/user/contact">
            <AiOutlineMail className="contact-icon" /> <span>문의 하기</span>
          </Link>
          <Link to="/user/delete">
            <FaUserSlash className="delete-icon" /> <span>회원 탈퇴</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserInfoPage;
