import { validateOnBlur, clearError } from '../../service/validate';
import handleFormSubmit from '../../utils/handleFormSubmit';
import FormItem from '../../components/FormInput/formInput';
import Button from '../../components/Button/button';
import IPageProps from '../../interfaces/IPageProps';

const loginPageData: IPageProps = {
  button: new Button({
    className: 'login__button',
    type: 'submit',
    text: 'Enter',
  }).render(),
  items: [
    new FormItem({
      name: 'login',
      type: 'text',
      label: 'Login',
      placeholder: 'Enter login',
      size: 40,
    }).render(),
    new FormItem({
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter password',
      size: 40,
    }).render(),
  ],
  events: {
    submit: (event: Event) => handleFormSubmit(event, 'profile'),
    focusout: (event: Event) => validateOnBlur(event),
    input: (event: Event) => clearError(event),
  },
};

export default loginPageData;
