import "./registration.css";
import Handlebars from 'handlebars/dist/handlebars';
import { registrationTemplate } from "./registration.tmpl";

const data = {
  inputs: [{
    placeholder: "Enter email",
    type: "text",
    inputName: "email",
  }, {
    placeholder: "Enter login",
    type: "text",
    inputName: "login",
  }, {
    placeholder: "Enter name",
    type: "text",
    inputName: "first_name",
  }, {
    placeholder: "Enter lastname",
    type: "text",
    inputName: "second_name",
  }, {
    placeholder: "Enter phone",
    type: "tel",
    inputName: "phone",
  }, {
    placeholder: "Enter password",
    type: "password",
    inputName: "password",
  }, {
    placeholder: "Confirm password",
    type: "password",
    inputName: "password",
  }]
}

document.addEventListener('DOMContentLoaded', () => {
    const registrationPage = Handlebars.compile(registrationTemplate);
    const html = registrationPage(data);
  document.body.innerHTML = html;
})