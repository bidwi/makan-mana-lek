import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content, fokus, home, skipLink, urlLink }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._fokus = fokus;
    this._home = home;
    this._skipLink = skipLink;
    this._urlLink = urlLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      fokus: this._fokus,
      home: this._home,
      skipLink: this._skipLink,
      urlLink: this._urlLink,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
