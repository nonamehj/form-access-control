import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const FormContext = createContext();

const getLocalStorage = () => {
  let users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};
const getAgreementStorage = () => {
  let data = localStorage.getItem("agreement");
  return data ? JSON.parse(data) : {};
};
const getCurrentUserStorage = () => {
  let user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : {};
};

const FormProvider = ({ children }) => {
  const [users, setUsers] = useState(getLocalStorage());
  const [currentUser, setCurrentUser] = useState(getCurrentUserStorage());
  const [agreement, setAgreement] = useState(getAgreementStorage());

  const submitLoginForm = useCallback(
    (formData) => {
      const userId = formData.get("id");
      const userPassword = formData.get("password");

      const oldUser = users.find(
        (user) => user.id === userId && user.password === userPassword
      );
      console.log("oldUser", oldUser);
      if (oldUser) {
        setCurrentUser({ ...oldUser, loggedIn: true });
      } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다");
        return false;
      }
      return true;
    },
    [users]
  );

  //약관동의
  const submitAgreeForm = useCallback((formData) => {
    const formAgreement = Object.fromEntries(formData);
    const allRequriedChecked =
      formAgreement.required1 === "terms" &&
      formAgreement.required2 === "privacy" &&
      formAgreement.required3 === "age";

    if (formAgreement.all === "all" || allRequriedChecked) {
      setAgreement(formAgreement);
      return true;
    } else {
      alert("필수 약관에 모두 동의해야 합니다");
      return false;
    }
  }, []);

  //회원가입
  const submitRegisterForm = useCallback(
    (formData) => {
      const newUser = Object.fromEntries(formData);

      newUser.agreement = agreement;
      setUsers((user) => [...user, newUser]);
      setAgreement({});
      return true;
    },
    [agreement]
  );
  //개인정보 수정
  const submitEditForm = useCallback(
    (formData) => {
      const updateUsers = users.map((user) => {
        if (user.id === formData.id) {
          return { ...user, ...formData };
        }
        return user;
      });
      setCurrentUser((prev) => ({ ...prev, ...formData }));
      setUsers(updateUsers);
      return true;
    },
    [users]
  );
  
  //회원 탈퇴
  const submitDeleteForm = useCallback(
    (formData) => {
      const userData = Object.fromEntries(formData);
      const deleteUsers = users.filter((user) => user.id !== userData.id);
      setCurrentUser({});
      setUsers(deleteUsers);
      return true;
    },
    [users]
  );

  //비밀번호찾기 - 리셋
  const submitResetPwForm = useCallback(
    (formData, findUser) => {
      const userData = Object.fromEntries(formData);

      const changeUserPW = users.map((user) => {
        if (user.id === findUser.id) {
          return { ...user, password: userData.password };
        }
        return user;
      });
      setUsers(changeUserPW);
      return true;
    },
    [users]
  );

  const handleSubmit = useCallback(
    (e, type, formData, matchedUser) => {
      e.preventDefault();

      if (type === "login") {
        return submitLoginForm(formData);
      }
      if (type === "agree") {
        return submitAgreeForm(formData);
      }
      if (type === "register") {
        return submitRegisterForm(formData);
      }
      if (type === "edit") {
        return submitEditForm(formData);
      }
      if (type === "delete") {
        return submitDeleteForm(formData);
      }
      if (type === "reset") {
        return submitResetPwForm(formData, matchedUser);
      }
    },
    [
      submitAgreeForm,
      submitDeleteForm,
      submitEditForm,
      submitLoginForm,
      submitRegisterForm,
      submitResetPwForm,
    ]
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    localStorage.setItem("agreement", JSON.stringify(agreement));
  }, [agreement]);
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);
  return (
    <FormContext.Provider
      value={{ currentUser, setCurrentUser, handleSubmit, agreement, users }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
export { FormContext, FormProvider };
