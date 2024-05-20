class MakanManaLekFooter extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
     <footer tabindex="13">
          <p>&copy; 2024 - <i> Makan Mana Lek </i></p>
     </footer>
          `;
  }
}

customElements.define('makan-mana-lek-footer', MakanManaLekFooter);
