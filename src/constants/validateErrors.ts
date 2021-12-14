const validateErrors: { [key: string]: string } = {
  login: 'Login must contain Latin and/or numbers',
  password: 'Password must contain uppercase letters and numbers',
  email: 'Email must comply with the format xxx@domain.yy',
  username: 'Username must be in Cyrillic or Latin',
  first_name:
    'Name must be in Cyrillic or Latin and start with a capital letter',
  second_name:
    'Lastname must be in Cyrillic or Latin and start with a capital letter',
  phone: 'Phone must comply with the format 8912345678 or +7912345678',
};
export default validateErrors;
