import './registration.css';
import registrationTemplate from './registration.tmpl';
import Block from '../../components/block';
import registrationPageData from './RegistrationPageData';

export default class RegistrationPage extends Block {
  constructor() {
    super(registrationTemplate, registrationPageData);
  }
}
