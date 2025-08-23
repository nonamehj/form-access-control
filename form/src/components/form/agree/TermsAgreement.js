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
            {/* <h4>필수 항목</h4> */}
            <div className="agree-center required-center">
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required1"
                  className="agree-input"
                  checked={agreement.required1}
                  onChange={handleCheckboxChange}
                  // value="privacy"   //개인정보수집 사용할때
                  value="terms"
                />
                {/* (필수) 개인정보 수집 및 이용 동의 */}
                <span className="consent-badge">(필수)</span>
                <span className="label-text">서비스 이용약관</span>
              </label>
              <p className="agreement-text">
                본 서비스는 사용자들이 뉴스, 기사, 기술 정보를 자유롭게 공유하고
                토론할 수 있는 커뮤니티입니다. 회원은 게시글 작성 및 댓글 참여
                시 타인의 권리를 침해하지 않으며, 건전한 온라인 문화 형성에
                동의합니다.
              </p>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required2"
                  className="agree-input"
                  checked={agreement.required2}
                  onChange={handleCheckboxChange}
                  // value="terms"   //서비스 이용 할때
                  value="privacy"
                />
                {/* (필수) 서비스 이용 약관 동의 */}
                <span className="consent-badge">(필수)</span>
                <span className="label-text">개인정보 수집 및 이용</span>
              </label>
              <p className="agreement-text">
                회원가입을 위해 이메일, 비밀번호 등 최소한의 개인정보를
                수집합니다. 수집된 정보는 서비스 제공 및 계정 관리 목적으로만
                사용됩니다.
              </p>
              <label className="agree-label required-label">
                <input
                  type="checkbox"
                  name="required3"
                  className="agree-input"
                  checked={agreement.required3}
                  onChange={handleCheckboxChange}
                  // value="identity" //본인명의 일때
                  value="age"
                />
                {/* (필수) 본인 명의 가입 동의 */}
                <span className="consent-badge">(필수)</span>
                <span className="label-text">만 14세 이상 확인</span>
              </label>
              <p className="agreement-text">
                본인은 만 14세 이상이며, 본 서비스 이용에 필요한 법적 책임을
                이행할 수 있음을 확인합니다.
              </p>
            </div>
            <hr />
            {/* <h4>선택 항목</h4> */}
            <div className="agree-center optional-center">
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional1"
                  className="agree-input"
                  checked={agreement.optional1}
                  onChange={handleCheckboxChange}
                  // value="event" //이벤트 정부 수신일때
                  value="newsletter"
                />
                {/* (선택) 이벤트 정보 수신 동의 */}
                <span className="consent-badge">(선택)</span>
                <span className="label-text">뉴스레터/이벤트 메일 수신</span>
              </label>
              <p className="agreement-text">
                기술 뉴스, 업데이트, 이벤트 정보를 이메일로 받아보시겠습니까?
              </p>
              <label className="agree-label optional-label">
                <input
                  type="checkbox"
                  name="optional2"
                  className="agree-input"
                  checked={agreement.optional2}
                  onChange={handleCheckboxChange}
                  // value="promo"  //프로모션 정보수신일때
                  value="recommended"
                />
                {/* (선택) 프로모션 정보 수신 동의 */}
                <span className="consent-badge">(선택)</span>
                <span className="label-text">추천 뉴스 알림 수신</span>
              </label>
              <p className="agreement-text">
                관심 카테고리의 새로운 뉴스나 업데이트를 알림으로
                받아보시겠습니까?
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
