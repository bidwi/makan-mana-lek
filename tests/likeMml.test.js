import FavoriteIdbMml from '../src/scripts/data/favorite-idb-mml';
import * as TesFactory from './helpers/tesFactory';

describe('Menyukai Restoran', () => {
  const addTombolSukaContainer = () => {
    document.body.innerHTML =
      '<section tabindex="6" id="tombolSukaContainer"></section>';
  };

  beforeEach(() => {
    addTombolSukaContainer();
  });

  it('seharusnya memunculkan tombol suka jika restoran belum pernah disukai', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Suka restoran ini"]')
    ).toBeTruthy();
  });

  it('seharusnya memunculkan tombol tidak suka jika restoran belum pernah disukai', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Batal suka restoran ini"]')
    ).toBeFalsy();
  });

  it('seharusnya bisa suka restoran', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    document.querySelector('#sukaButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteIdbMml.getRestoMml(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteIdbMml.deleteRestoMml(1);
  });

  it('seharusnya tidak menambah restoran ketika sudah disukai', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    await FavoriteIdbMml.putRestoMml({ id: 1 });

    document.querySelector('#sukaButton').dispatchEvent(new Event('click'));

    expect(await FavoriteIdbMml.getAllRestoMml()).toEqual([{ id: 1 }]);

    await FavoriteIdbMml.deleteRestoMml(1);
  });

  it('seharusnya tidak menambahkan restoran ketika tidak ada id', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({});

    document.querySelector('#sukaButton').dispatchEvent(new Event('click'));

    expect(await FavoriteIdbMml.getAllRestoMml()).toEqual([]);
  });
});
