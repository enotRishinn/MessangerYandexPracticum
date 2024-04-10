import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages: { [key: string]: string[] } = {
    '/login': [Pages.LoginPage],
    '/register': [Pages.RegisterPage],
    '/chats': [Pages.ChatPage],
    '/500': [Pages.BugFixErrorPage],
    '/404': [Pages.NotFoundErrorPage],
    '/profile': [Pages.ProfilePage],
    '/change-password': [Pages.ChangePasswordPage],
    '/edit-profile': [Pages.EditProfilePage]
};

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(path: string) {
    if (!pages[path]) {
        window.location.pathname = '/login';
    } else {
        const mainContent = document.getElementById("main-content");

        if (mainContent) {
            const [ source, args ] = pages[path];
            const handlebarsFunct = Handlebars.compile(source);
            mainContent.innerHTML = handlebarsFunct(args);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => navigate(window.location.pathname));

document.addEventListener('click', (e: MouseEvent) => {
    const page = (e.target as HTMLInputElement).getAttribute('page');
    if (page) {
        window.location.pathname = page;
        e.preventDefault();
    }
  
});
