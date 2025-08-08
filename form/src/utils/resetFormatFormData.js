const resetFormatFormData = (formData) => {
  const obj = Object.fromEntries(formData);
  return {
    password: obj.password?.trim() || "",
    password2: obj.password2?.trim() || "",
  };
};

export { resetFormatFormData };
