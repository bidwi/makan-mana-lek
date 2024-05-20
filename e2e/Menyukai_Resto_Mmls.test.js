Feature(`Liking Mml's Restaurants`);

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked MML`s restaurants', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-card__not__found');
});

const assert = require('assert');

Scenario('liking one MML`s restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-card__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-mml__judul a', 60);
  I.seeElement('.resto-mml__judul a');
  const firstRestoMml = locate('.resto-mml__judul a').first();
  const firstRestoMmlTitle = await I.grabTextFrom(firstRestoMml);
  I.click(firstRestoMml);

  I.waitForElement('#sukaButton', 60);
  I.seeElement('#sukaButton');
  I.click('#sukaButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card');
  const likedRestoMmlTitle = await I.grabTextFrom('.resto-mml__judul');

  assert.strictEqual(firstRestoMmlTitle, likedRestoMmlTitle);
});

Scenario('searching MML`s restaurants', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-card__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-mml__judul a', 60);
  I.seeElement('.resto-mml__judul a');

  const titles = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto-mml__judul a').at(i));

    I.waitForElement('#sukaButton', 60);
    I.seeElement('#sukaButton');
    I.click('#sukaButton');

    titles.push(await I.grabTextFrom('#resto-mml__judul'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const visibleLikedRestoMmls = await I.grabNumberOfVisibleElements(
    '.restaurant-card'
  );
  assert.strictEqual(titles.length, visibleLikedRestoMmls);

  const searchQuery = titles[1].substring(1, 3);
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const matchingRestoMmls = titles.filter(
    (title) => title.indexOf(searchQuery) !== -1
  );
  const visibleSearchedLikedRestoMmls = await I.grabNumberOfVisibleElements(
    '.restaurant-card'
  );
  assert.strictEqual(matchingRestoMmls.length, visibleSearchedLikedRestoMmls);

  for (let i = 0; i < matchingRestoMmls.length; i++) {
    const visibleTitle = await I.grabTextFrom(
      locate('.resto-mml__judul').at(i + 1)
    );
    assert.strictEqual(matchingRestoMmls[i], visibleTitle);
  }
});

Scenario('adding a MML`s restaurant review', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-card__not__found');
  I.amOnPage('/');

  I.waitForElement('.resto-mml__judul a', 60);
  I.seeElement('.resto-mml__judul a');
  const lastRestoMml = locate('.resto-mml__judul a').last();
  I.click(lastRestoMml);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function buatString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const nameReviewInput = buatString(12);
  const formReviewInput = buatString(12);

  I.seeElement('#nameReview');
  I.click('#nameReview');
  I.fillField('input[name="nameReview"]', nameReviewInput);

  I.seeElement('#formReview');
  I.click('#formReview');
  I.fillField('textarea[name="formReview"]', formReviewInput);

  I.click('#submit_form');
  I.wait(8);

  const locateRestoMmlName = locate('.review_name').last();
  const lastRestoMmlNameReview = await I.grabTextFrom(locateRestoMmlName);

  const locateRestoMmlDesc = locate('.review_content').last();
  const lastRestoMmlDescReview = await I.grabTextFrom(locateRestoMmlDesc);

  const hasil = [nameReviewInput, formReviewInput];

  assert.strictEqual(lastRestoMmlNameReview, hasil[0]);
  assert.strictEqual(lastRestoMmlDescReview, hasil[1]);
});

Scenario(
  'showing a frequently asked questions of MML`s restaurants',
  async ({ I }) => {
    I.see(
      'Tidak ada restoran untuk ditampilkan',
      '.restaurant-card__not__found'
    );
    I.amOnPage('/#/faq');

    I.see('1. Dari mana restoran mendapatkan rating?', '.faq-1');
    I.see(
      '2. Bagaimana cara anda memilih restoran tertentu dari Sabang sampai Merauke?',
      '.faq-2'
    );
    I.see(
      '3. Bagaimana caranya agar saya bisa menyimpan restoran yang saya sukai?',
      '.faq-3'
    );

    I.see(
      'Setelah mengunjungi restoran, kasir biasanya menunjukkan halaman rating, penilaian kamu akan masuk ke dalam website kami.',
      '.faq-desc-1'
    );
    I.see(
      'Kami memilih restoran yang paling ikonik berdasarkan keunikan, cita rasa, dan kepuasan para pelanggan restoran.',
      '.faq-desc-2'
    );
    I.see(
      'Klik garis tiga yang ada di kiri atas browser anda, lalu tekan tombol "Favorite".',
      '.faq-desc-3'
    );
  }
);
