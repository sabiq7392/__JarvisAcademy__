class SectionAside extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <ul class="list-group border overflow-auto">
        <li class="list-group-item">
          <a href="">Section 1</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 2</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 3</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 4</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 5</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 6</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 7</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 8</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 9</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 10</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 11</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 12</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 13</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 14</a>
        </li>
        <li class="list-group-item">
          <a href="">Section 15</a>
        </li>
      </ul>
    `;
  }
}

customElements.define('section-aside', SectionAside);