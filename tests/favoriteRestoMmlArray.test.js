import { itActsAsFavoriteRestoMmlModel } from './contracts/favoriteMmlContract';

let favoriteRestoMmls = [];

const FavoriteRestoMmlArray = {
  getRestoMml(id) {
    if (!id) {
      return;
    }

    return favoriteRestoMmls.find((restaurant) => restaurant.id === id);
  },

  getAllRestoMml() {
    return favoriteRestoMmls;
  },

  putRestoMml(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestoMml(restaurant.id)) {
      return;
    }

    favoriteRestoMmls.push(restaurant);
  },

  deleteRestoMml(id) {
    favoriteRestoMmls = favoriteRestoMmls.filter(
      (restaurant) => restaurant.id !== id
    );
  },

  searchRestoMmls(query) {
    return this.getAllRestoMml().filter((restaurant) => {
      const hurufKecilRestoMmlTitle = (restaurant.name || '-').toLowerCase();
      const jammedRestoMmlTitle = hurufKecilRestoMmlTitle.replace(/\s/g, '');

      const hurufKecilQuery = query.toLowerCase();
      const jammedQuery = hurufKecilQuery.replace(/\s/g, '');

      return jammedRestoMmlTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Contract Test Implementasi Array Restoran Favorit', () => {
  afterEach(() => {
    favoriteRestoMmls = [];
  });

  itActsAsFavoriteRestoMmlModel(FavoriteRestoMmlArray);
});
