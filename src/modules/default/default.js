import "./default.css";
import sidebarLogoImage from "../../../static/images/logo.png"
import sidebarBackImage from "../../../static/images/arrow-back.png"
import Handlebars from "handlebars/dist/handlebars";
import { defaultTemplate } from "./default.tmpl";

const data = { 
  sidebarLogoImage,
  sidebarBackImage,
  links: [{
    title: "Авторизация",
    href: "/login",
  },{
    title: "Регистрация",
    href: "/registration",
  },{
    title: "Настройки профиля",
    href: "/profile",
  },{
    title: "Ошибка 404",
    href: "/404",
  },{
    title: "Ошибка 500",
    href: "/500",
  },{
    title: "Чат",
    href: "/chat",
  }]
}

document.addEventListener('DOMContentLoaded', () => {
    const defaultPage = Handlebars.compile(defaultTemplate);
    const html = defaultPage(data);
    const app = document.querySelector("#app");
    app.innerHTML = html;
})