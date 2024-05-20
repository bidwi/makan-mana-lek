import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './views/pages/main-page';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  fokus: document.querySelector('#fokus'),
  home: document.querySelector('#home'),
  skipLink: document.getElementsByClassName('skip-link'),
  urlLink: window.location.href,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
