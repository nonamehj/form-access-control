export const koreanNameRegex = /^[가-힣]{2,}$/;
export const englishNameRegex = /^[a-zA-Z]{2,}$/;
export const nameRegex = /^[가-힣a-zA-Z]{2,}$/;
export const idRegex = /^[a-z][a-z0-9]{3,15}$/;
export const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;
export const phoneRegex = /^010-\d{4}-\d{4}$/;
export const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
