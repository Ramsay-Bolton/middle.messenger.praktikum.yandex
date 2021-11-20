import "./login.css";
import Handlebars from 'handlebars/dist/handlebars';
import { loginTemplate } from "./login.tmpl";

const data = {
  inputs: [{
    placeholder: "Enter login",
    type: "text",
    inputName: "login",
  }, {
    placeholder: "Enter password",
    type: "password",
    inputName: "password",
  }]
}

document.addEventListener('DOMContentLoaded', () => {
    const loginPage = Handlebars.compile(loginTemplate);
    const html = loginPage(data);
  document.body.innerHTML = html;
})