import IProfileProps from './IProfileProps';
import { validateOnBlur, clearError } from '../../service/validate';
import handleFormSubmit from '../../utils/handleFormSubmit';
import FormItem from '../../components/FormInput/formInput';
import Button from '../../components/Button/button';
import avatarImage from '../../../static/images/avatar.jpg';
import sidebarLogoImage from '../../../static/images/logo.png';
import sidebarBackImage from '../../../static/images/arrow-back.png';
import avatarImageChange from '../../../static/images/change_avatar.png';

const profilePageData: IProfileProps = {
  avatarImage,
  sidebarLogoImage,
  sidebarBackImage,
  avatarImageChange,
  button: new Button({
    className: 'profile__save-button',
    type: 'submit',
    text: 'Save',
  }).render(),
  inputs: [
    new FormItem({
      label: 'Email',
      value: 'pochta@ya.ru',
      type: 'text',
      name: 'email',
      size: 40,
    }).render(),
    new FormItem({
      label: 'Name',
      value: 'Tatiana',
      type: 'text',
      name: 'first_name',
      size: 40,
    }).render(),
    new FormItem({
      label: 'Lastname',
      value: 'Tatianova',
      type: 'text',
      name: 'second_name',
      size: 40,
    }).render(),
    new FormItem({
      label: 'Username',
      value: 'Tatiana',
      type: 'text',
      name: 'username',
      size: 40,
    }).render(),
    new FormItem({
      label: 'Login',
      value: 'tatianova',
      type: 'text',
      name: 'login',
      size: 40,
    }).render(),
    new FormItem({
      label: 'Phone',
      value: '+7 (999) 999 99 99',
      type: 'tel',
      name: 'phone',
      size: 40,
    }).render(),
  ],
  events: {
    submit: (event: Event) => handleFormSubmit(event, 'profile'),
    focusout: (event: Event) => validateOnBlur(event),
    input: (event: Event) => clearError(event),
  },
};

export default profilePageData;
