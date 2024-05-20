import { createRestaurantItemTemplate } from '../../templates/generate-template';
import notyf from '../../../globals/toast-config';

class FavoriteRestoMmlTengok {
  getTemplate() {
    notyf.open({
      type: 'info',
      message: '<b>Memuat restoran favoritmu, tunggu sebentar..</b>',
    });

    return `
    <main class="konten">

    <section id="kueriForm">
      <input id="query" type="text" placeholder="Cari Restoran">
      <button id="kueriButton" type="submit">Cari</button>
    </section>

    <a tabindex="1" href="#resto-mmls" id="favorite-skip-link"  class="skip-link">Skip ke Konten</a>
    <h2 id="heading-favorite">Resto Favoritmu</h2>
    <article id="resto-mmls" tabindex="6" class="resto-mmls"></article>

    </main>
       `;
  }

  showFavoriteRestoMmls(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestoMmlTemplate();
    }
    document.getElementById('resto-mmls').innerHTML = html;

    document
      .getElementById('resto-mmls')
      .dispatchEvent(new Event('resto-mmls:updated'));
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestoMmls(restaurants) {
    this.showFavoriteRestoMmls(restaurants);
  }

  _getEmptyRestoMmlTemplate() {
    return `
      <h2 style="color: #fff;" class="restaurant-card__not__found">
        Tidak ada restoran untuk ditampilkan
      </h2>
    `;
  }
}

export default FavoriteRestoMmlTengok;
