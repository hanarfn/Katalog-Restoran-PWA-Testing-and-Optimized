class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Copyright © 2022 - Hunt Food</p>
      </footer>         
      `;
  }
}
customElements.define('footer-bar', FooterBar);
