import TheRestaurantSource from '../../data/makanmanalek-source';
import { createRestaurantItemTemplate } from '../templates/generate-template';
import notyf from '../../globals/toast-config';

const MainPage = {
  async render() {
    notyf.open({
      type: 'info',
      message: '<b>Memuat data restoran, tunggu sebentar..</b>',
    });

    return `
    <a tabindex="1" id="skip-link" href="#jumbotron" class="skip-link">Skip ke Konten</a>

    <!--   <section tabindex="6" id="jumbotron" alt="people cooking in the background image">  -->

    <picture>
    <source media="(max-width: 600px)" srcset="./hero/hero-1-small.jpg">
    <img src='./hero/hero-1-large.jpg' id="jumbotron" alt="Picture of people cooking">
    </picture>

    <h1 class="background-img-h1"> <b>Selamat Datang,</b> <br> <small> Kunjungi Resto di Seluruh Indonesia! </small> </h1>
    <!--   </section> -->

  <section tabindex="7" id="daftar-resto">
    <h2>Daftar Resto Terkenal</h2>
    <article id="resto-mmls"></article>
  </section>
  `;
  },

  async afterRender() {
    const jumbotron = document.getElementById('jumbotron');
    const drawer = document.getElementById('drawer');
    jumbotron.addEventListener('focus', () => {
      drawer.classList.remove('open');
    });

    try {
      const makanmanalek = await TheRestaurantSource.mainPage();
      const restoContainer = document.querySelector('#resto-mmls');
      makanmanalek.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      notyf.open({
        type: 'error',
        message:
          '<b>Gagal mendapatkan restoran di sekitarmu,&nbsp;coba lagi.</b>',
      });
    }

    const skipLink = document.getElementById('skip-link');
    const fokus = document.getElementById('fokus');

    skipLink.addEventListener('focus', () => {
      drawer.classList.remove('open');
    });

    fokus.addEventListener('focus', () => {
      drawer.classList.add('open');
    });

    window.onload = () => {
      skipLink.focus();
    };
  },
};

export default MainPage;
