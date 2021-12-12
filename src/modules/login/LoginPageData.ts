import { ILoginProps } from './ILoginProps';
import { validateOnBlur, clearError } from '../../service/validate';
import { handleFormSubmit } from '../../utils/handleFormSubmit';
import FormItem from '../../components/FormInput/formInput';
import Button from '../../components/Button/button';

const loginPageData: ILoginProps = {
    button: new Button({
      className: 'login__login__button',
       id: 'login_button',
       type: 'submit',
       text: 'Enter',
    }).render(),
    inputs: [
      new FormItem({
        name: 'saved_login',
        type: 'text',
        label: 'Login',
        placeholder: 'Enter login',
        size: 40,
      }).render(),
      new FormItem({
        name: 'saved_password',
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
}

export default loginPageData;