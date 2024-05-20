import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/makanmanalek-source';
import { createRestaurantDetailTemplate } from '../templates/generate-template';
import TombolSukaPresenter from '../../utils/tombol-suka-presenter';
import FavoriteIdbMml from '../../data/favorite-idb-mml';

import notyf from '../../globals/toast-config';

const Detail = {
  async render() {
    notyf.open({
      type: 'info',
      message: '<b>Memuat detail restoran, tunggu sebentar..</b>',
    });

    return `
    <a href='#restaurant' tabindex="1" id="detail-skip-link"  class="skip-link">Skip ke Konten</a>
    <article tabindex="6" id="restaurant" class="restaurant"></article>
    <section tabindex="6" id="tombolSukaContainer"></section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    const skipLink = document.getElementById('detail-skip-link');
    const skipTo = document.getElementById('restaurant');

    skipLink.addEventListener('click', (event) => {
      restaurantContainer.scrollIntoView();
      skipTo.focus();
      event.preventDefault();
    });

    try {
      restaurantContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);
      console.log(restaurant);

      TombolSukaPresenter.init({
        tombolSukaContainer: document.querySelector('#tombolSukaContainer'),
        favoriteRestoMmls: FavoriteIdbMml,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          address: restaurant.address,
          pictureId: restaurant.pictureId,
          categories: restaurant.categories,
          menus: restaurant.menus,
          rating: restaurant.rating,
          customerReviews: restaurant.customerReviews,
        },
      });
    } catch (error) {
      notyf.open({
        type: 'error',
        message: '<b>Gagal mendapatkan detail restoran,&nbsp;coba lagi.</b>',
      });
    }

    async function insertRestaurantReview(reviewData) {
      try {
        const response = await fetch(
          'https://restaurant-api.dicoding.dev/review',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
          }
        );

        if (!response.ok) {
          notyf.open({
            type: 'error',
            message: '<b>Gagal memasukkan review,&nbsp;coba lagi.</b>',
          });
          throw new Error('Gagal memasukkan review');
        }

        const responseData = await response.json();
        if (responseData.error) {
          notyf.open({
            type: 'error',
            message: '<b>Gagal memasukkan review,&nbsp;coba lagi.</b>',
          });
          throw new Error(responseData.message);
        }

        return responseData.customerReviews;
      } catch (error) {
        notyf.open({
          type: 'error',
          message: '<b>Gagal memasukkan review,&nbsp;coba lagi.</b>',
        });
        console.error('Error memasukkan review:', error);
        throw error;
      }
    }

    function updateReviews(reviews) {
      const reviewsRestoList = document.querySelector(
        '.restaurant_reviews_list'
      );

      reviewsRestoList.innerHTML = '';

      reviews.forEach((review) => {
        const reviewMmlElement = document.createElement('li');
        reviewMmlElement.classList.add('restaurant_review');
        reviewMmlElement.innerHTML = `
          <h4 class="review_name">${review.name}</h4>
          <p class="review_content">${review.review}</p>
          <p class="review_date">Date: ${review.date}</p>
        `;
        reviewsRestoList.appendChild(reviewMmlElement);
      });
    }

    const form = document.getElementById('form_detail');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('nameReview').value;
      const review = document.getElementById('formReview').value;

      try {
        const reviewData = {
          id: restaurant.id,
          name,
          review,
        };

        const newReviews = await insertRestaurantReview(reviewData);
        updateReviews(newReviews);
        console.log('Review successfully inserted:', newReviews);
      } catch (error) {
        notyf.open({
          type: 'error',
          message: '<b>Gagal memperbarui review,&nbsp;coba lagi.</b>',
        });
        console.error('Error memperbarui review:', error);
      }
    });
  },
};

export default Detail;
