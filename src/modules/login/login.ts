import './login.css';
import loginTemplate from './login.tmpl';
import Block from '../../components/block';
import loginPageData from './LoginPageData';

export default class LoginPage extends Block {
  constructor() {
    super(loginTemplate, loginPageData);
  }
}
