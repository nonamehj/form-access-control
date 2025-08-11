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
// const agreementInitialState = {
//   all: false,
//   required1: false,
//   required2: false,
//   required3: false,
//   optional1: false,
//   optional2: false,
// };
const FormProvider = ({ children }) => {
  const [users, setUsers] = useState(getLocalStorage());
  const [currentUser, setCurrentUser] = useState(getCurrentUserStorage());
  const [agreement, setAgreement] = useState(getAgreementStorage());
  // localStorage.clear();
  console.log("context updateUser", users);
  // console.log("context current", currentUser);
  const handleSubmit = useCallback(
    (e, type, formData, matchedUser) => {
      e.preventDefault();

      let formResult;
      if (type === "login") {
        formResult = submitLoginForm(formData);
        return formResult;
        // return submitLogtinForm(formData)
      }
      if (type === "agree") {
        formResult = submitAgreeForm(formData);
        return formResult;
      }
      if (type === "register") {
        formResult = submitRegisterForm(formData);
        return formResult;
      }
      if (type === "edit") {
        formResult = submitEditForm(formData);
        return formResult;
      }
      if (type === "delete") {
        formResult = submitDeleteForm(formData);
        return formResult;
      }
      if (type === "reset") {
        formResult = submitResetPwForm(formData, matchedUser);
        return formResult;
      }
    },
    [users, agreement]
  );

  const submitLoginForm = (formData) => {
    const userId = formData.get("id");
    const userPassword = formData.get("password");

    const oldUser = users.find(
      (user) => user.id === userId && user.password === userPassword
    );
    console.log("oldUser", oldUser);
    if (oldUser) {
      // setLoggedIn(true);
      // setCurrentUser(oldUser);
      // setCurrentUser((prev) => {
      //   return { oldUser, loggedIn: true };
      // });
      setCurrentUser({ ...oldUser, loggedIn: true });
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다");
      return false;
    }
    return true;
  };

  const submitAgreeForm = (formData) => {
    const formAgreement = Object.fromEntries(formData);
    console.log("context test agreement", agreement);
    // const allRequriedChecked =
    //   formAgreement.required1 === "on" &&
    //   formAgreement.required2 === "on" &&
    //   formAgreement.required3 === "on";
    const allRequriedChecked =
      formAgreement.required1 === "privacy" &&
      formAgreement.required2 === "terms" &&
      formAgreement.required3 === "identity";
    // console.log("allRequriedChecked", allRequriedChecked);
    // const allSelectedChecked = updated.optional1 && updated.optional2;
    console.log("formAgreement", formAgreement);
    // if (formAgreement.all === "on" || allRequriedChecked) {
    if (formAgreement.all === "all" || allRequriedChecked) {
      setAgreement(formAgreement);
      return true;
    } else {
      alert("필수 약관에 모두 동의해야 합니다");
      return false;
    }
  };
  const submitRegisterForm = (formData) => {
    const newUser = Object.fromEntries(formData);
    console.log("newnew", newUser);
    const hasEmpty = Object.values(newUser).some(
      (value) => value.trim() === ""
    );
    // if (hasEmpty) {
    //   alert("모든 필드를 작성해주세요");
    //   return false;
    // }
    newUser.agreement = agreement;
    setUsers((user) => [...user, newUser]);
    setAgreement({});
    return true;
  };
  const submitEditForm = (formData) => {
    const updateUsers = users.map((user) => {
      if (user.id === formData.id) {
        return { ...user, ...formData };
      }
      return user;
    });
    // setCurrentUser({ ...currentUser, ...formData });
    // setCurrentUser((prev)=>({...prev, ...formData, loggedIn :true}))
    setCurrentUser((prev) => ({ ...prev, ...formData }));
    setUsers(updateUsers);
    return true;
  };
  const submitDeleteForm = (formData) => {
    const userData = Object.fromEntries(formData);
    const deleteUsers = users.filter((user) => user.id !== userData.id);
    setCurrentUser({});
    setUsers(deleteUsers);
    return true;
  };

  const submitResetPwForm = (formData, findUser) => {
    const userData = Object.fromEntries(formData);

    const changeUserPW = users.map((user) => {
      if (user.id === findUser.id) {
        return { ...user, password: userData.password };
      }
      return user;
    });
    setUsers(changeUserPW);
    return true;
  };

  const formmatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/[^0-9]/g, "");
    const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    return formatted;
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
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
