//Elementos HMTL DOM
let productsSection = document.querySelector('.products');
let filterSection = document.querySelector('.filter');
let priceFilterSection = document.querySelector('.priceFilterContainer');
let sellerFilterSection = document.querySelector('.sellerFilterContainer');
//template string tags 
const templateProductTags = (product) => {
  return ` <div class="itemContainer">
  <img src="${product.image}" alt="${product.name}"> 
 <p class="name">${product.name}</p>
 <p class="seller">${product.seller}</p>
 <p class="price">$${product.price}</p>
 <p class="stars">Estrellas: ${product.stars}</p>
 <p class="reviews">Reviews: ${product.reviews}</p>
</div>`

};
const deleteButtonTags = () => {
  return `<button class="delete">Borrar filtros</button>`
};
const sellerTags = () => {
  return `
  <select id="sellersOption">
        <option class="sellerOption" value="default">-</option>
        <option class="sellerOption" value="apple">Apple</option>
        <option class="sellerOption" value="hp">Hp</option>
        <option class="sellerOption" value="dell">Dell</option>
        <option class="sellerOption" value="huawei">Huawei</option>
  </select>
  `
}
const priceTagsRadio = () => {
  return `  
  <input type="radio" id="1000" name="radio-group" value="1000">
  <label for="1000">$1000</label>

  <input type="radio" id="1500" name="radio-group" value="1500">
  <label for="1500">$1500</label>

  <input type="radio" id="2000" name="radio-group" value="2000">
  <label for="2000">$2000</label>
  `
};
const priceTagsTypeNumber = () => {
  return `
  <h3>Presupuesto máximo: </h3>
  <input type="number" min="1000" max="2000" step="500" value="2000" id="filterByNumber">
  `
}
//Render de los template strings
const renderProductElements = (product) => {
  let template = templateProductTags(product);
  productsSection.innerHTML += template;
};
const renderDeleteButton = () => {
  const deleteButton = deleteButtonTags();
  filterSection.innerHTML += deleteButton;
};
const renderPriceTagsRadio = () => {
  const price = priceTagsRadio();
  priceFilterSection.innerHTML += price;
}
renderPriceTagsRadio();

const renderPriceTagsNumber = () => {
  const price = priceTagsTypeNumber();
  priceFilterSection.innerHTML += price;
}
renderPriceTagsNumber()

const renderSellerTags = () => {
  const sellerSection = sellerTags();
  sellerFilterSection.innerHTML += sellerSection
}
renderSellerTags()
// Productos y fábrica de productos
const products = [];
const createProduct = (name, price, stars, reviews, seller, image) => {
  let product = {
    name: name,
    price: price,
    stars: stars,
    reviews: reviews,
    seller: seller,
    image: image
  };
  products.push(product);
};
const listOfProducts = () => {
  let macBookAir12 = createProduct('Macbook Air', 1000, 4, 100, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/1039/10392488/1935-apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-gris-espacial.jpg')
  let macBookPro = createProduct('Macbook Pro', 1500, 4, 3, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/33/335377/1575-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-gris-espacial.jpg')
  let macBookProMax = createProduct('Macbook Pro Max', 2000, 1, 1, 'Apple', 'https://thumb.pccomponentes.com/w-530-530/articles/1039/10392479/1202-apple-macbook-pro-apple-m2-8gb-256gb-ssd-gpu-deca-core-133-plata.jpg')
  let hpEssential = createProduct('HP Essentials', 1000, 4, 200, 'Hp', 'https://thumb.pccomponentes.com/w-530-530/articles/1073/10733296/1176-hp-victus-15-fa0053ns-intel-core-i5-12450h-16gb-512gb-ssd-rtx-3050-156.jpg')
  let hpPro = createProduct('HP Pro', 1500, 4, 10, 'Hp', 'https://thumb.pccomponentes.com/w-530-530/articles/1042/10428550/156-hp-15s-fq5028ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg')
  let alienWare12 = createProduct('Alienware 12"', 1000, 3, 20, 'Dell', 'https://m.media-amazon.com/images/I/81UKmA-HCVL.__AC_SY300_SX300_QL70_ML2_.jpg')
  let alienWarePro = createProduct('Alienware Pro', 1500, 4, 20, 'Dell', 'https://m.media-amazon.com/images/I/71YUYGSPwwL.__AC_SY300_SX300_QL70_ML2_.jpg')
  let alienWareProMax = createProduct('Alienware Pro Max', 2000, 5, 2, 'Dell', 'https://m.media-amazon.com/images/I/71Fztn9iCmL.__AC_SX300_SY300_QL70_ML2_.jpg')
  let huaweiOne = createProduct('Huawei One', 1000, 2, 4, 'Huawei', 'https://m.media-amazon.com/images/I/61Zj88xI2PL._AC_UL800_FMwebp_QL65_.jpg')
  let huaweiTwo = createProduct('Huawei Two', 1500, 5, 4, 'Huawei', 'https://m.media-amazon.com/images/I/71kvpcfu5KL._AC_UL800_FMwebp_QL65_.jpg')
};
listOfProducts();

//invocación del render y agregarlo al DOM
products.forEach(product => renderProductElements(product));
renderDeleteButton();
const deleteButton = document.querySelector('.delete');
const selectSellerFilter = document.getElementById('sellersOption');
let filterPriceNumber = document.getElementById('filterByNumber');
let radio1000 = document.getElementById('1000');
let radio1500 = document.getElementById('1500');
let radio2000 = document.getElementById('2000');

//filtro por vendedor
const filteredSellers = (selectedSeller) => {
  productsSection.innerHTML = '';
  if (selectedSeller == 'Default') {
    products.forEach(product => renderProductElements(product));
  };
  seller = products.filter(product => product.seller == selectedSeller);
  seller.forEach(seller => renderProductElements(seller));
};

//filtro por precio radio
const filteredPrices = (price) => {
  productsSection.innerHTML = '';
  price = products.filter(product => product.price == price);
  price.forEach(product => renderProductElements(product))
};
//filtro por precio numero
const filterByPrice = (filteredPrice) => {
  productsSection.innerHTML = '';
  price = products.filter(product => product.price <= filteredPrice);
  price.forEach(product => renderProductElements(product));
}
//borrar filtros
const deleteFilters = () => {
  productsSection.innerHTML = ''
  products.forEach(product => renderProductElements(product));
  selectSellerFilter.selectedIndex = 0;
  radio1000.checked = false;
  radio1500.checked = false;
  radio2000.checked = false;
  filterPriceNumber.value = 2000;
};

//EventListeners
deleteButton.addEventListener('click', deleteFilters);

selectSellerFilter.addEventListener('change', (ev) => {
  const selectedSeller = ev.target.value;
  const selectedSellerCapital = selectedSeller.charAt(0).toUpperCase() + selectedSeller.slice(1);
  filteredSellers(selectedSellerCapital)
});

radio1000.addEventListener('change', (ev) => {
  filteredPrices(ev.target.value)
});
radio1500.addEventListener('change', (ev) => {
  filteredPrices(ev.target.value)
});
radio2000.addEventListener('change', (ev) => {
  filteredPrices(ev.target.value)
});
filterPriceNumber.addEventListener('change', (ev) => {
  const filteredPrice = ev.target.value;
  filterByPrice(filteredPrice);
})

