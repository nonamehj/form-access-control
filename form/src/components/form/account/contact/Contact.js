import "./ContactStyle.css";
import validateContactForm from "../../../../utils/validateContactForm";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const contactData = Object.fromEntries(formData);
    const error = validateContactForm(contactData);
    if (error) {
      alert(error);
      return;
    }
    alert("문의하기 완료 ");
    e.currentTarget.reset();
    navigate("/user");
  };
  return (
    <section className="section contact-section">
      <div className="contact-container form-container">
        <h3 className="contact-title form-title">문의하기</h3>
        <form className="contact-form form" onSubmit={onSubmit}>
          <div className="contact-row-wrapper form-row-wrapper">
            <div className="contact-row form-row">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contact-row form-row">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="contact-row form-row">
              <label htmlFor="subject">제목</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="contact-row form-row">
              <label htmlFor="message">메시지</label>
              <textarea
                name="message"
                id="message"
                cols="6"
                placeholder="메시지를 입력하세요"
              />
            </div>
          </div>
          <button className="form-btn contact-btn">제출</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
