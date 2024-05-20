import FavoriteIdbMml from '../src/scripts/data/favorite-idb-mml';
import * as TesFactory from './helpers/tesFactory';

describe('Tidak Menyukai Restoran', () => {
  const addTombolSukaContainer = () => {
    document.body.innerHTML =
      '<section tabindex="6" id="tombolSukaContainer"></section>';
  };

  beforeEach(async () => {
    addTombolSukaContainer();
    await FavoriteIdbMml.putRestoMml({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteIdbMml.deleteRestoMml(1);
  });

  it('seharusnya menampilkan widget batal suka ketika restoran sudah disukai', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Batal suka restoran ini"]')
    ).toBeTruthy();
  });

  it('seharusnya menampilkan widget suka ketika restoran sudah disukai', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="Suka restoran ini"]')
    ).toBeFalsy();
  });

  it('seharusnya bisa menghapus restoran yang sudah disukai dari daftar', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="Batal suka restoran ini"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteIdbMml.getAllRestoMml()).toEqual([]);
  });

  it('seharusnya tidak menampilkan error ketika user menekan widget batal suka jika restoran yang tidak disukai tidak ada di dalam daftar', async () => {
    await TesFactory.createTombolSukaPresenterWithRestaurant({ id: 1 });

    await FavoriteIdbMml.deleteRestoMml(1);

    document
      .querySelector('[aria-label="Batal suka restoran ini"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteIdbMml.getAllRestoMml()).toEqual([]);
  });
});
