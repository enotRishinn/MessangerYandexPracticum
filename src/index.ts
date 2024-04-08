import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages: { [key: string]: string[] } = {
    '/login': [Pages.LoginPage],
    '/register': [Pages.RegisterPage],
    '/chat-page': [Pages.ChatPage],
    '/505': [ Pages.BugFixErrorPage ],
    '/404': [ Pages.NotFoundErrorPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(path: string) {
    if (!pages[path]) {
        window.location.pathname = '/login';
        navigate('/login');
    } else {
        const [ source, args ] = pages[path];
        const handlebarsFunct = Handlebars.compile(source);
        document.body.innerHTML = handlebarsFunct(args);
    }
}

document.addEventListener('DOMContentLoaded', () => navigate(window.location.pathname));

// document.addEventListener('click', e => {
//   const page = e.target.getAttribute('page');
//   if (page) {
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });
