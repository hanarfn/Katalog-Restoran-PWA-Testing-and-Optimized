class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#content" class="skip-link">Skip to Content</a>
        `;
  }
}
customElements.define('skip-content', SkipContent);
