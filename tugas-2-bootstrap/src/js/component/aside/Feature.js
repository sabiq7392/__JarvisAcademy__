class FeatureAside extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <ul class="list-group border overflow-auto">
        <li class="list-group-item">
          <a href="">Feature 1</a>
        </li>
        <li class="list-group-item">
          <a href="">Feature 2</a>
        </li>
        <li class="list-group-item">
          <a href="">Feature 3</a>
        </li>
        <li class="list-group-item">
          <a href="">Feature 4</a>
        </li>
        <li class="list-group-item">
          <a href="">Feature 5</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('feature-aside', FeatureAside);