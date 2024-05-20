import TombolSukaPresenter from '../../src/scripts/utils/tombol-suka-presenter';
import FavoriteIdbMml from '../../src/scripts/data/favorite-idb-mml';

const createTombolSukaPresenterWithRestaurant = async (restaurant) => {
  await TombolSukaPresenter.init({
    tombolSukaContainer: document.querySelector('#tombolSukaContainer'),
    favoriteRestoMmls: FavoriteIdbMml,
    restaurant,
  });
};

export { createTombolSukaPresenterWithRestaurant };
