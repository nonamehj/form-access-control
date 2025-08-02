const deleteFormatFormData = (formData) => {
  const obj = Object.fromEntries(formData);
  return {
    id: obj.id?.trim() || "",
    password: obj.password?.trim() || "",
    password2: obj.password2?.trim() || "",
  };
};

export { deleteFormatFormData };
