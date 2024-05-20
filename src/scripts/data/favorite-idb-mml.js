import { openDB } from 'idb';
import CONFIG from '../globals/config';
import notyf from '../globals/toast-config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteIdbMml = {
  async getRestoMml(id) {
    try {
      if (!id) {
        return;
      }

      return await (await dbPromise).get(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error(error);
      notyf.open({
        type: 'error',
        message: '<b>Gagal mendapatkan restoran favorit,&nbsp;coba lagi.</b>',
      });
    }
    return null;
  },
  async getAllRestoMml() {
    try {
      return await (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      console.error(error);
      notyf.open({
        type: 'error',
        message:
          '<b>Gagal mendapatkan semua restoran favorit,&nbsp;coba lagi.</b>',
      });
    }
    return null;
  },
  async putRestoMml(resto) {
    try {
      if (!resto.hasOwnProperty('id')) {
        return;
      }

      return await (await dbPromise).put(OBJECT_STORE_NAME, resto);
    } catch (error) {
      console.error(error);
      notyf.open({
        type: 'error',
        message: '<b>Gagal update restoran,&nbsp;coba lagi.</b>',
      });
    }
    return null;
  },
  async deleteRestoMml(id) {
    try {
      return await (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error(error);
      notyf.open({
        type: 'error',
        message: '<b>Gagal menghapus restoran,&nbsp;coba lagi.</b>',
      });
    }
    return null;
  },

  async searchRestoMmls(query) {
    return (await this.getAllRestoMml()).filter((restaurant) => {
      const loweredCaseRestoMmlTitle = (restaurant.name || '-').toLowerCase();
      const jammedRestoMmlTitle = loweredCaseRestoMmlTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoMmlTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteIdbMml;
