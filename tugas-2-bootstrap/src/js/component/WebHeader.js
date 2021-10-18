class HeaderWeb extends HTMLElement {
  connectedCallback() {
    this.#render();
  }

  #render() {
    this.innerHTML = `
      <header class="container-fluid bg-light">
        <div class="container ">
          <div class="mini-link d-flex justify-content-end border-bottom">
            <a href="" class="py-1 px-3">Gift Card</a>
            <a href="" class="py-1 px-3">Track Order</a>
            <a href="" class="py-1 px-3">Contact Us</a>
          </div>
    
          <div class="d-flex justify-content-between py-2">
            <a class="navbar-brand" href="#">
              <img width="100" src="src/img/identity/mame-logo.svg" alt="mame">
            </a>
            <form class="d-flex shadow-sm">
              <input class="form-control border-0" type="search" placeholder="Search" aria-label="Search">
              <button class="btn bg-white" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `
  }
}

customElements.define("header-web", HeaderWeb)