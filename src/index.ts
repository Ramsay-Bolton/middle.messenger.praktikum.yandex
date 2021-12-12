import Error from './modules/errors/error';
import LoginPage from './modules/login/login';
import RegistrationPage from './modules/registration/registration';
import ProfilePage from './modules/profile/profile';
import ChatsPage from './modules/chats/chat';


const ROUTES: { [key: string]: any } = {
    login: new LoginPage(),
    404: new Error({code: '404', info: 'NOT FOUND'}),
    500: new Error({code: '500', info: 'SERVER ERROR'}),
    registration: new RegistrationPage(),
    profile: new ProfilePage(),
    chats: new ChatsPage(),
};

const getPageByRoute = () => {
	const path = window.location.pathname.slice(1);
  
	return ROUTES[path] || ROUTES[404];
  };

const render = () => {
	const page = getPageByRoute();
	const renderedContent = page.getContent();
	const app = <HTMLElement>document.querySelector("#app");
	app.appendChild(renderedContent);
  };
  
render();