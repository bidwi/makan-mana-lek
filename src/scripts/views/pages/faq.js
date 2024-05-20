import '../../components/mml-faq';

const Faq = {
  async render() {
    return `
    <a href='#faq-list' tabindex="1" id="favorite-skip-link" class="skip-link">Skip ke Konten</a>
    <article tabindex="6" id='faq-list'>
    <makan-mana-lek-faq></makan-mana-lek-faq>
    </article>
       `;
  },

  async afterRender() {
    const faqContainer = document.getElementById('faq-list');
    const skipLink = document.getElementById('favorite-skip-link');

    skipLink.addEventListener('click', (event) => {
      faqContainer.scrollIntoView();
      faqContainer.focus();
      event.preventDefault();
    });
  },
};

export default Faq;
