const getListBarang = () => {
  var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
  ];
  const listBarang = document.getElementById('listBarang');
  const urlImg = 'public/img/';

  items.forEach((item) => {
    listBarang.innerHTML += `
      <div class ="col-4 mt-2"> 
        <div class="card" style="width: 18rem;">
          <img src="${urlImg}${item[4]}" class="card-img-top" height="200px" width="200px" alt="${item[1]}">
          <div class="card-body">
            <h5 class="card-title" id="itemName">${item[1]}</h5>
            <p class="card-text" id="itemDesc">${item[3]}</p>
            <p class="card-text">Rp ${item[2]}</p>
            <a href="#" class="btn btn-primary add-cart" id="addCart">Tambahkan ke keranjang</a>
          </div>
        </div>
      </div>
    `;
  });
};

const cart = () => {
  const btnCart = document.getElementById('cart')
  const btnsAdd = document.querySelectorAll('.add-cart');

  let amount = 1;
  btnsAdd.forEach((btnAdd) => {
    btnAdd.addEventListener('click', () => {
      btnCart.innerHTML = `<i class="fas fa-shopping-cart"></i> (${amount++})` ;
    });
  });
};

const formSearchItem = () => {
  const form = document.getElementById('formItem');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const itemTitleContainers = document.querySelectorAll('.card-title');
    const hide = (item) => item.style.display = 'none';
    const show = (item) => item.style.display = '';

    itemTitleContainers.forEach((itemTitleContainer) => {
      const titles = itemTitleContainer.textContent.toLowerCase();
      const keywords = document.getElementById('keyword').value.toLowerCase();
      const items = itemTitleContainer.parentElement.parentElement.parentElement;

      if (!titles.includes(keywords)) {
        hide(items);
      } else {
        show(items);
      }
    }); 
  });
};

const main = () => {
  getListBarang();
  cart();
  formSearchItem();
};

main();




