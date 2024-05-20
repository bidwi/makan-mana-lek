import FavoriteIdbMml from '../../data/favorite-idb-mml';

import FavoriteRestoMmlTengok from './liked-resto-mml/favorite-resto-mml-tengok';
import FavoriteRestoMmlShowPresenter from './liked-resto-mml/favorite-resto-mml-show-presenter';
import FavoriteRestoMmlSearchPresenter from './liked-resto-mml/favorite-resto-mml-search-presenter';

const tengok = new FavoriteRestoMmlTengok();
const Favorite = {
  async render() {
    return tengok.getTemplate();
  },

  async afterRender() {
    const skipLink = document.getElementById('favorite-skip-link');
    const skipTo = document.getElementById('resto-mmls');

    new FavoriteRestoMmlShowPresenter({
      tengok,
      favoriteRestoMmls: FavoriteIdbMml,
    });
    new FavoriteRestoMmlSearchPresenter({
      tengok,
      favoriteRestoMmls: FavoriteIdbMml,
    });

    skipLink.addEventListener('click', (event) => {
      skipTo.scrollIntoView();
      skipTo.focus();
      event.preventDefault();
    });
  },
};

export default Favorite;
