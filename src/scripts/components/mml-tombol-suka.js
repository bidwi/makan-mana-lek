class MakanManaLekTombolSuka extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
          <button aria-label="Suka restoran ini" alt="Suka restoran ini" id="sukaButton" class="like">
          <p style="font-size: 30px;">&#x2661;</p>
          </button>
             `;
  }
}

customElements.define('makan-mana-lek-tombol-suka', MakanManaLekTombolSuka);
