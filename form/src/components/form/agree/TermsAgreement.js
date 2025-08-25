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
    if (formResult) {
      navigate("/login/signup", { replace: true });
    }
  };

  useEffect(() => {
    setAgreement(agreementInitialState);
  }, []);

  return (
    <section className="section agree-section">
      <div className="agree-container form-container">
        <h3 className="form-title agree-title">약관 동의</h3>
        <form onSubmit={onSubmit} className="agree-form form">
          <div className="form-row-wrapper agree-row-wrapper">
            <div className="agree-center agree-all-row">
              <label className="agree-label ">
                <input
                  type="checkbox"
                  name="all"
                  className="agree-input"
                  checked={agreement.all}
                  onChange={handleAllChange}
                  value="all"
                />
                <span className="label-text all-consent-text">
                  전체 동의하기
                </span>
              </label>
            </div>
            <hr />

            <div className="agree-center required-center">
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required1"
                  className="agree-input"
                  checked={agreement.required1}
                  onChange={handleCheckboxChange}
                  value="terms"
                />
                <span className="consent-badge">(필수)</span>
                <span className="label-text">서비스 이용약관</span>
              </label>
              <p className="agreement-text">
                본 서비스는 사용자들이 뉴스를 확인하고, 관심 있는 정보를 받아볼
                수 있는 플랫폼입니다. <br />
                회원은 서비스 이용 시 타인의 권리를 침해하지 않으며, 건전한
                이용에 동의합니다.
              </p>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required2"
                  className="agree-input"
                  checked={agreement.required2}
                  onChange={handleCheckboxChange}
                  value="privacy"
                />
                <span className="consent-badge">(필수)</span>
                <span className="label-text">개인정보 수집 및 이용</span>
              </label>
              <p className="agreement-text">
                회원가입을 위해 이메일, 비밀번호 등 최소한의 개인정보를
                수집합니다. <br />
                수집된 정보는 서비스 제공 및 계정 관리 목적으로만 사용됩니다.
              </p>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required3"
                  className="agree-input"
                  checked={agreement.required3}
                  onChange={handleCheckboxChange}
                  value="age"
                />
                <span className="consent-badge">(필수)</span>
                <span className="label-text">만 14세 이상 확인</span>
              </label>
              <p className="agreement-text">
                본인은 만 14세 이상이며, 본 서비스 이용에 필요한 법적 책임을
                이행할 수 있음을 확인합니다.
              </p>
            </div>
            <hr />
            <div className="agree-center optional-center">
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional1"
                  className="agree-input"
                  checked={agreement.optional1}
                  onChange={handleCheckboxChange}
                  value="newsletter"
                />
                <span className="consent-badge">(선택)</span>
                <span className="label-text">뉴스레터/이벤트 메일 수신</span>
              </label>
              <p className="agreement-text">
                서비스와 관련된 소식, 이벤트, 프로모션, 공지사항 등을 이메일을
                통해 받아보실 수 있습니다. <br />
                동의하지 않으셔도 서비스 이용에는 제한이 없습니다.
              </p>
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional2"
                  className="agree-input"
                  checked={agreement.optional2}
                  onChange={handleCheckboxChange}
                  value="recommended"
                />
                <span className="consent-badge">(선택)</span>
                <span className="label-text">추천 뉴스 알림 수신</span>
              </label>
              <p className="agreement-text">
                관심사와 맞춤형으로 제공되는 뉴스 알림을 푸시 알림 또는 이메일로
                받아보실 수 있습니다. <br />
                동의하지 않으셔도 서비스 이용에는 제한이 없습니다.
              </p>
            </div>
            <hr />
          </div>
          <button className="form-btn">다음 단계</button>
        </form>
      </div>
    </section>
  );
};

export default TermsAgreement;
