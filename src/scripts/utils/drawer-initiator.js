const DrawerInitiator = {
  init({ button, drawer, content, home }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      event.preventDefault();
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('focus', () => {
      this._toggleDrawer(event, drawer);
    });

    home.addEventListener('focus', () => {
      drawer.classList.add('open');
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
