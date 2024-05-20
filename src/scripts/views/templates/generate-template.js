import CONFIG from '../../globals/config';
import '../../components/mml-tombol-suka';
import '../../components/mml-tombol-sudah-suka';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
<main id="restaurant_detail">
<section class="restaurant_card">
<section id="top-title">
<h1 id="resto-mml__judul" class="restaurant_title">${restaurant.name}</h1>
<h2 class="restaurant_title"><b>${restaurant.rating} / 5 Stars </b></h2>
</section>
<article class="restaurant_card-flex">
  <section class="restaurant_content">
      <img class="restaurant_image" alt="image of ${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
}" />
<p class="restaurant_city_address"><b>${restaurant.city} • ${
  restaurant.address
}</b></p>
      <p class="restaurant_description">${restaurant.description}</p>
      <hr style="width:100%;text-align:left;margin-left:0">
    <article class="restaurant_menus">
      <h3 class="restaurant_section_title">Menus</h3>
      <section class="restaurant_foods">
        <h4 class="restaurant_menu_title">Foods</h4>
        <ul class="restaurant_foods_list">
          ${restaurant.menus.foods
            .map((food) => `<li class="food_item">${food.name}</li>`)
            .join('')}
        </ul>
      </section>
      
      <section class="restaurant_drinks">
      
        <h4 class="restaurant_menu_title">Minuman</h4>
        <ul class="restaurant_drinks_list">
          ${restaurant.menus.drinks
            .map((drink) => `<li class="drink_item">${drink.name}</li>`)
            .join('')}
        </ul>
      </section>
    </article>
  </section>

  <aside class="restaurant_reviews">
    <h3 class="restaurant_reviews_title">Customer Reviews</h3>
    <ul class="restaurant_reviews_list">
      ${restaurant.customerReviews
        .map(
          (review) => `
        <li class="restaurant_review">
          <h4 class="review_name">${review.name}</h4>
          <p class="review_content">${review.review}</p>
          <p class="review_date">Date: ${review.date}</p>
        </li>
      `
        )
        .join('')}
    </ul>
  </aside>
  </article>
</section>

<form id="form_detail">
      <h2 id="form_title">Review restoran ini</h2>
    <label for="nameReview">Nama</label> <br>
    <input type="text" tabindex="7" aria-label="Nama" alt="Nama" class="review_place" placeholder="Laskar" id="nameReview" name="nameReview" required autocomplete="off"
      aria-describedby="nameReviewValidation" minlength="6" />
    <p id="nameReviewValidation" class="validation-message" aria-live="polite"></p>

    <label for="formReview">Review</label> <br>
    <textarea type="text" tabindex="8" aria-label="Review" alt="Review" class="review_place" placeholder="Pelangi" id="formReview" name="formReview" required autocomplete="off"
      aria-describedby="formReviewValidation" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
      minlength="6"></textarea>
    <p id="formReviewValidation" class="validation-message" aria-live="polite"></p>

    <button tabindex="10" id="submit_form" aria-label="Submit review" alt="Submit review" type="submit" class="btn-kirim">Kirim</button>
</form>

</main>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="-1" class="restaurant-card">
              <img class="lazyload" data-src="${
                CONFIG.BASE_IMAGE_URL + restaurant.pictureId
              }" alt="image of ${restaurant.name || '-'}">
              <main class="restaurant-info">
                <h3 class="resto-mml__judul"><a tabindex="0" class="resto-mml__judul_href" href='#/detail/${
                  restaurant.id
                }'>${restaurant.name || '-'}</a></h3>
                <p>${restaurant.city} &nbsp; | &nbsp; Rating: ${
  restaurant.rating || '-'
}</p>
                <p id="desc">${restaurant.description || '-'}</p>
                <a id="cek-selengkapnya" tabindex="7" aria-label="Cek selengkapnya di resto ${
                  restaurant.name
                }" class="cek-selengkapnya" href='#/detail/${
  restaurant.id
}' data-id="${restaurant.id}">Cek Selengkapnya</a>
              </main>
            </article>
`;

const createTombolSuka = () => `
<makan-mana-lek-tombol-suka></makan-mana-lek-tombol-suka>
`;

const createTombolSudahSuka = () => `
<makan-mana-lek-tombol-sudah-suka></makan-mana-lek-tombol-sudah-suka>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createTombolSuka,
  createTombolSudahSuka,
};
