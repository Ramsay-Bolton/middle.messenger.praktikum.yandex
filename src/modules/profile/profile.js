import "./profile.css";
import avatarImage from "../../../static/images/avatar.jpg"
import sidebarLogoImage from "../../../static/images/logo.png"
import sidebarBackImage from "../../../static/images/arrow-back.png"
import avatarImageChange from "../../../static/images/change_avatar.png"
import Handlebars from 'handlebars/dist/handlebars';
import { profileTemplate } from "./profile.tmpl";

const data = {
  avatarImage,
  sidebarLogoImage,
  sidebarBackImage,
  avatarImageChange,
  inputs: [{
    label: "Email",
    value: "pochta@ya.ru",
    type: "text",
    inputName: "email",
  }, {
    label: "Name",
    value: "Tatiana",
    type: "text",
    inputName: "first_name",
  }, {
    label: "Lastname",
    value: "Tatianova",
    type: "text",
    inputName: "second_name",
  }, {
    label: "Username",
    value: "Tatiana",
    type: "text",
    inputName: "username",
  }, {
    label: "Login",
    value: "tatianova",
    type: "text",
    inputName: "login",
  }, {
    label: "Phone",
    value: "+7 (999) 999 99 99",
    type: "tel",
    inputName: "phone",
  }]
}

document.addEventListener('DOMContentLoaded', () => {
    const profilePage = Handlebars.compile(profileTemplate);
    const html = profilePage(data);
  document.body.innerHTML = html;
})