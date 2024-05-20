import { itActsAsFavoriteRestoMmlModel } from './contracts/favoriteMmlContract';
import FavoriteIdbMml from '../src/scripts/data/favorite-idb-mml';

describe('Contract Test Implementasi Restoran Favorit IndexedDB', () => {
  afterEach(async () => {
    (await FavoriteIdbMml.getAllRestoMml()).forEach(async (restaurant) => {
      await FavoriteIdbMml.deleteRestoMml(restaurant.id);
    });
  });

  itActsAsFavoriteRestoMmlModel(FavoriteIdbMml);
});
