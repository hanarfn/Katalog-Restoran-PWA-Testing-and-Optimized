class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <header>
              <div class="header">
              <div class="header_logo">
                  <img src="../images/logo.png" alt="">
                  <a href="#/home">Hunt Food</a>
              </div>
              <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="button to open side menu"><i class="fas fa-bars"></i></button>
              <nav id="drawer" class="header_nav">
                  <ul class="nav_list">
                      <li class="nav_item"><a href="#/home">Home</a></li>
                      <li class="nav_item"><a href="#/favorite">Favorites</a></li>
                      <li class="nav_item"><a target="_blank" href="https://www.linkedin.com/in/hanarifin/">About Us</a></li>
                  </ul>
              </nav>  
              </div>
              <section class="hero" id="hero">
                  <div class="hero__inner">
                      <h1 class="hero__title">Hunt Food</h1>
                      <p class="hero__tagline">get your favorite food</p>
                  </div>
              </section>
          </header>
        `;
  }
}
customElements.define('app-bar', AppBar);
