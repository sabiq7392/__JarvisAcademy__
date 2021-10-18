// import cards from '../data/card-main.js'

class CardMain extends HTMLElement {
  connectedCallback() {
    this.img = this.getAttribute('img') || null;
    this.title = this.getAttribute('title') || null;
    this.text = this.getAttribute('text') || null;
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <div class="col h-100">
        <div class="card h-100">
          <img src="${this.img}" class="card-img-top" alt="${this.title}">
          <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.text}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-main', CardMain);