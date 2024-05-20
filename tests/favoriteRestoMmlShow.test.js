import FavoriteRestoMmlTengok from '../src/scripts/views/pages/liked-resto-mml/favorite-resto-mml-tengok';
import FavoriteRestoMmlShowPresenter from '../src/scripts/views/pages/liked-resto-mml/favorite-resto-mml-show-presenter';

describe('Showing all favorite MML`s restaurants', () => {
  let tengok;

  const renderTemplate = () => {
    tengok = new FavoriteRestoMmlTengok();
    document.body.innerHTML = tengok.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no MML`s restaurants have been liked', () => {
    it('should ask for the favorite MML`s restaurants', () => {
      const favoriteRestoMmls = {
        getAllRestoMml: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoMmlShowPresenter({
        tengok,
        favoriteRestoMmls,
      });
      expect(favoriteRestoMmls.getAllRestoMml).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no MML`s restaurants have been liked', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-card__not__found').length
          ).toEqual(1);
          done();
        });

      const favoriteRestoMmls = {
        getAllRestoMml: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoMmlShowPresenter({
        tengok,
        favoriteRestoMmls,
      });
    });
  });

  describe('When favorite MML`s restaurants exist', () => {
    it('should show the MML`s restaurants', (done) => {
      document
        .getElementById('resto-mmls')
        .addEventListener('resto-mmls:updated', () => {
          expect(document.querySelectorAll('.restaurant-card').length).toEqual(
            2
          );
          done();
        });
      const favoriteRestoMmls = {
        getAllRestoMml: jest.fn().mockImplementation(() => [
          {
            id: 'fnfn8mytkpmkfw1e867',
            name: 'Makan mudah',
            rating: 3.7,
            description:
              'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
          },
          {
            id: 'dwg2wt3is19kfw1e867',
            name: 'Drinky Squash',
            rating: 3.9,
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
          },
        ]),
      };
      new FavoriteRestoMmlShowPresenter({
        tengok,
        favoriteRestoMmls,
      });
    });
  });
});
