import "./error.css";
import sidebarLogoImage from "../../../static/images/logo.png"
import sidebarBackImage from "../../../static/images/arrow-back.png"
import Handlebars from 'handlebars/dist/handlebars';
import { serverErrorTemplate } from "./serverError.tmpl";

const data = {
  sidebarLogoImage,
  sidebarBackImage,
  info: "SERVER ERROR",
  code: "500"
}

document.addEventListener('DOMContentLoaded', () => {
    const serverErrorPage = Handlebars.compile(serverErrorTemplate);
    const html = serverErrorPage(data);
  document.body.innerHTML = html;
})