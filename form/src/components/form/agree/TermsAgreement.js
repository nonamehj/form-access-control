import React, { useEffect, useState } from "react";
import "./TermsAgreementStyle.css";

import { useFormContext } from "./../../../formContext";
import { useNavigate } from "react-router-dom";
const agreementInitialState = {
  all: false,
  required1: false,
  required2: false,
  required3: false,
  optional1: false,
  optional2: false,
};

const TermsAgreement = () => {
  const { handleSubmit } = useFormContext();
  const [agreement, setAgreement] = useState(agreementInitialState);
  const navigate = useNavigate();
  const handleAllChange = (e) => {
    const checked = e.target.checked;
    setAgreement({
      all: checked,
      required1: checked,
      required2: checked,
      required3: checked,
      optional1: checked,
      optional2: checked,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updated = { ...agreement, [name]: checked };

    const allRequriedChecked =
      updated.required1 && updated.required2 && updated.required3;
    const allSelectedChecked = updated.optional1 && updated.optional2;

    updated.all = allRequriedChecked && allSelectedChecked;
    setAgreement(updated);
  };

  const onSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    const formResult = handleSubmit(e, "agree", formData);
    console.log("agreeFormResult", formResult);
    if (formResult) {
      navigate("/login/signup", { replace: true });
    }
  };
  useEffect(() => {
    if (
      agreement.required1 !== false ||
      agreement.required2 !== false ||
      agreement.required3 !== false ||
      agreement.optional1 !== false ||
      agreement.optional2 !== false ||
      agreement.all !== false
    ) {
      setAgreement(agreementInitialState);
    }
  }, [
    agreement.all,
    agreement.optional1,
    agreement.optional2,
    agreement.required1,
    agreement.required2,
    agreement.required3,
  ]);

  return (
    <section className="section agree-section">
      <div className="agree-container form-container">
        <h3 className="form-title agree-title">약관 동의</h3>
        <form onSubmit={onSubmit} className="agree-form form">
          <div className="form-row-wrapper agree-row-wrapper">
            <div className="agree-center">
              <label className="agree-label ">
                <input
                  type="checkbox"
                  name="all"
                  className="agree-input"
                  checked={agreement.all}
                  onChange={handleAllChange}
                  value="all"
                />
                전체 약관 동의
              </label>
            </div>
            <hr />
            <h4>필수 항목</h4>
            <div className="agree-center required-center">
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required1"
                  className="agree-input"
                  checked={agreement.required1}
                  onChange={handleCheckboxChange}
                  value="privacy"
                />
                (필수) 개인정보 수집 및 이용 동의
              </label>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required2"
                  className="agree-input"
                  checked={agreement.required2}
                  onChange={handleCheckboxChange}
                  value="terms"
                />
                (필수) 서비스 이용 약관 동의
              </label>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required3"
                  className="agree-input"
                  checked={agreement.required3}
                  onChange={handleCheckboxChange}
                  value="identity"
                />
                (필수) 본인 명의 가입 동의
              </label>
            </div>
            <hr />
            <h4>선택 항목</h4>
            <div className="agree-center optional-center">
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional1"
                  className="agree-input"
                  checked={agreement.optional1}
                  onChange={handleCheckboxChange}
                  value="event"
                />
                (선택) 이벤트 정보 수신 동의
              </label>
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional2"
                  className="agree-input"
                  checked={agreement.optional2}
                  onChange={handleCheckboxChange}
                  value="promo"
                />
                (선택) 프로모션 정보 수신 동의
              </label>
            </div>
            <hr />
          </div>
          <button className="form-btn">회원가입</button>
        </form>
      </div>
    </section>
  );
};

export default TermsAgreement;
