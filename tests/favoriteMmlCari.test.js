import FavoriteRestoMmlSearchPresenter from '../src/scripts/views/pages/liked-resto-mml/favorite-resto-mml-search-presenter';
import FavoriteRestoMmlTengok from '../src/scripts/views/pages/liked-resto-mml/favorite-resto-mml-tengok';

describe('Mencari restoran', () => {
  let presenter;
  let favoriteRestoMmls;
  let tengok;

  const searchRestoMmls = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoMmlSearchContainer = () => {
    tengok = new FavoriteRestoMmlTengok();
    document.body.innerHTML = tengok.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestoMmls = {
      getAllRestoMml: jest.fn(),
      searchRestoMmls: jest.fn(),
    };
    presenter = new FavoriteRestoMmlSearchPresenter({
      favoriteRestoMmls,
      tengok,
    });
  };

  beforeEach(() => {
    setRestoMmlSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('seharusnya mampu untuk menangkap kueri yang diketik oleh user', () => {
      favoriteRestoMmls.searchRestoMmls.mockImplementation(() => []);

      searchRestoMmls('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('seharusnya menanyakan ke model untuk mencari resto yang disukai', () => {
      favoriteRestoMmls.searchRestoMmls.mockImplementation(() => []);

      searchRestoMmls('resto a');

      expect(favoriteRestoMmls.searchRestoMmls).toHaveBeenCalledWith('resto a');
    });

    it('seharusnya menampilkan restoran yang ditemukan dari Restoran Favorit | should show the MML`s restaurants found by Favorite MML`s restaurants', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          expect(document.querySelectorAll('.restaurant-card').length).toEqual(
            3
          );
          done();
        });
      favoriteRestoMmls.searchRestoMmls.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, name: 'resto abc' },
            { id: 222, name: 'ada juga resto abcde' },
            { id: 333, name: 'ini juga boleh resto a' },
          ];
        }
        return [];
      });
      searchRestoMmls('resto a');
    });

    it('seharusnya menampilkan nama restoran yang dicari dari Restoran Favorit | should show the name of the MML`s restaurants found by Favorite MML`s restaurants', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          const restoMmlJudul = document.querySelectorAll('.resto-mml__judul');
          expect(restoMmlJudul.item(0).textContent).toEqual('resto abc');
          expect(restoMmlJudul.item(1).textContent).toEqual(
            'ada juga resto abcde'
          );
          expect(restoMmlJudul.item(2).textContent).toEqual(
            'ini juga boleh resto a'
          );
          done();
        });

      favoriteRestoMmls.searchRestoMmls.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, name: 'resto abc' },
            { id: 222, name: 'ada juga resto abcde' },
            { id: 333, name: 'ini juga boleh resto a' },
          ];
        }
        return [];
      });

      searchRestoMmls('resto a');
    });

    it('should show - when the MML`s restaurant returned does not contain a title', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          const restoMmlsJudul = document.querySelectorAll('.resto-mml__judul');
          expect(restoMmlsJudul.item(0).textContent).toEqual('-');

          done();
        });

      favoriteRestoMmls.searchRestoMmls.mockImplementation((query) => {
        if (query === 'resto a') {
          return [{ id: 444 }];
        }

        return [];
      });

      searchRestoMmls('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteRestoMmls.getAllRestoMml.mockImplementation(() => []);

      searchRestoMmls(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestoMmls('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestoMmls('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestoMmls('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite MML`s restaurants', () => {
      favoriteRestoMmls.getAllRestoMml.mockImplementation(() => []);

      searchRestoMmls('    ');
      expect(favoriteRestoMmls.getAllRestoMml).toHaveBeenCalledTimes(1);
    });
  });

  describe('When no favorite MML`s restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-card__not__found').length
          ).toEqual(1);
          done();
        });
      favoriteRestoMmls.searchRestoMmls.mockImplementation((query) => []);
      searchRestoMmls('resto a');
    });

    it('should not show any MML`s restaurant', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          expect(document.querySelectorAll('.restaurant-card').length).toEqual(
            0
          );
          done();
        });
      favoriteRestoMmls.searchRestoMmls.mockImplementation((query) => []);
      searchRestoMmls('resto a');
    });
  });
});
