const formatFormData = (formData) => {
  const obj = Object.fromEntries(formData);
  return {
    id: obj.id?.trim() || "",
    email: obj.email?.trim() || "",
    password: obj.password?.trim() || "",
    phone: obj.phone?.trim() || "",
    nickname: obj.nickname?.trim() || "",
    gender: obj.gender || "",
    nationality: obj.nationality || "",
    birth: obj.birth || "",
    telecom: obj.telecom || "",
  };
};

export { formatFormData };
