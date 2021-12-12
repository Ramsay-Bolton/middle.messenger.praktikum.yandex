import IRegistrationProps from './IRegistrationProps';
import { validateOnBlur, clearError } from '../../service/validate';
import { handleFormSubmit } from '../../utils/handleFormSubmit';
import FormItem from '../../components/FormInput/formInput';
import Button from '../../components/Button/button';

const registrationPageData: IRegistrationProps = {
  button: new Button({
    className: 'registration__registration__button',
    id: 'registration_button',
    type: 'submit',
    text: 'Enter',
  }).render(),
  inputs: [
    new FormItem({
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Enter email',
      size: 40,
    }).render(),
    new FormItem({
      name: 'login',
      type: 'text',
      label: 'Login',
      placeholder: 'Enter login',
      size: 40,
    }).render(),
    new FormItem({
      name: 'first_name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter name',
      size: 40,
    }).render(),
    new FormItem({
      name: 'second_name',
      type: 'text',
      label: 'Lastname',
      placeholder: 'Enter lastname',
      size: 40,
    }).render(),
    new FormItem({
      name: 'phone',
      type: 'tel',
      label: 'Phone',
      placeholder: 'Enter phone',
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
      submit: (event: Event) => handleFormSubmit(event, 'registration'),
      focusout: (event: Event) => validateOnBlur(event),
      input: (event: Event) => clearError(event),
    },
}

export default registrationPageData;