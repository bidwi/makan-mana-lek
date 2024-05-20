class MakanManaLekFaq extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="faq">
    <h2>Panduan Seputar Makan Mana Lek</h2>

    <article tabindex="7" id="card">
      <h3 class="faq-1">1. Dari mana restoran mendapatkan rating?</h3>
      <h4 class="faq-desc-1">Setelah mengunjungi restoran, kasir biasanya menunjukkan halaman rating, penilaian kamu akan masuk ke dalam website kami.</h4>
    </article>

    <article tabindex="8" id="card">
      <h3 class="faq-2">2. Bagaimana cara anda memilih restoran tertentu dari Sabang sampai Merauke?</h3>
      <h4 class="faq-desc-2">Kami memilih restoran yang paling ikonik berdasarkan keunikan, cita rasa, dan kepuasan para pelanggan restoran.</h4>
    </article>

    <article tabindex="9" id="card">
      <h3 class="faq-3">3. Bagaimana caranya agar saya bisa menyimpan restoran yang saya sukai?</h3>
      <h4 class="faq-desc-3">Klik garis tiga yang ada di kiri atas browser anda, lalu tekan tombol "Favorite".</h4>
    </article>
  </section>
             `;
  }
}

customElements.define('makan-mana-lek-faq', MakanManaLekFaq);
