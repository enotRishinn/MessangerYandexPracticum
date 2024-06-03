import Block from './components/common/block';
import * as Pages from './pages';

// Хранение функций для создания страниц
const routes: Record<string, () => Block> = {
  '/404': () => new Pages.NotFoundErrorPage(),
  '/500': () => new Pages.BugFixErrorPage(),
  '/login': () => new Pages.LoginPage(),
  '/register': () => new Pages.RegisterPage(),
  '/profile': () => new Pages.ProfilePage(),
  '/change-password': () => new Pages.ChangePasswordPage(),
  '/edit-profile': () => new Pages.EditProfilePage(),
  '/chats': () => new Pages.ChatPage()
};

const render: (path: string) => void = (path) => {
  const app = document.getElementById('main-content');

  if (app) {
    app.innerHTML = '';

    const createPage = routes[path];
    if (createPage) {
      const page = createPage();
      app.append(page.getContent() as HTMLElement);
    } else {
      const notFoundPage = routes['/404']();
      app.append(notFoundPage.getContent() as HTMLElement);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path in routes) {
    render(path);
  } else if (path === '/') {
    render('/login');
  } else {
    render('/404');
  }
});
