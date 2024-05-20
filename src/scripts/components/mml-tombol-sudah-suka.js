class MakanManaLekTombolSudahSuka extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
          <button aria-label="Batal suka restoran ini" alt="Batal suka restoran ini" id="sukaButton" class="like">
          <p style="font-size: 30px;">&#x2665;</p>
          </button>
             `;
  }
}

customElements.define(
  'makan-mana-lek-tombol-sudah-suka',
  MakanManaLekTombolSudahSuka
);
