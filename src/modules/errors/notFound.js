import "./error.css";
import sidebarLogoImage from "../../../static/images/logo.png"
import sidebarBackImage from "../../../static/images/arrow-back.png"
import Handlebars from "handlebars/dist/handlebars";
import { notFoundTemplate } from "./notFound.tmpl";

const data = { 
  sidebarLogoImage,
  sidebarBackImage,
  info: "NOT FOUND",
  code: "404"
}

document.addEventListener('DOMContentLoaded', () => {
    const notFoundPage = Handlebars.compile(notFoundTemplate);
    const html = notFoundPage(data);
    const app = document.querySelector("#app");
    app.innerHTML = html;
})