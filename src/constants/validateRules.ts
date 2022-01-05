/* eslint-disable */
const rules: {[key: string]: RegExp} = {
  login: /^[A-Za-z0-9_\-]{3,20}$/i,
  password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z]{8,40}/,
  email: /^[0-9a-z\-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i,
  first_name: /^([А-ЯЁ]{1}[а-яё\-]{1,}|[A-Z]{1}[a-z\-]{1,})$/,
  second_name: /^([А-ЯЁ]{1}[а-яё]{1,}|[A-Z]{1}[a-z]{1,})$/,
  username: /[A-Za-z]{3,20}/,
  phone: /^(\+7|8)[0-9]{10}$/
};

export default rules;
