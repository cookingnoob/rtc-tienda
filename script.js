//Elementos HMTL DOM
let productsSection = document.querySelector('.products');
let filterSection = document.querySelector('.filter');

//template string tags 
const templateProductTags = (product) => {
  return ` <div class="itemContainer">
 <p class="name">${product.name}</p>
 <p class="seller">${product.seller}</p>
 <p class="price">$${product.price}</p>
 <p class="stars">Estrellas: ${product.stars}</p>
 <p class="reviews">Reviews: ${product.reviews}</p>
</div>`
  /* <img src="${product.image}" alt="${product.name}"> */
};
const filterByPriceTags = () => {
  return `
  <label for="1000">$1000</label>
  <input type="radio" name="1000" id="1000" class="priceInput">
  <label for="1500">$1500</label>
  <input type="radio" name="1500" id="1500" class="priceInput">
  <label for="1000">$2000</label>
  <input type="radio" name="2000" id="2000" class="priceInput">`
};
const deleteButtonTags = () => {
  return `<button class="delete">Borrar filtros</button>`
};

//Render de los template strings
const renderProductElements = (product) => {
  let template = templateProductTags(product);
  productsSection.innerHTML += template
};
const renderFilterByPrice = () => {
  let priceTags = filterByPriceTags();
  filterSection.innerHTML += priceTags
};
const renderDeleteButton = () => {
  const deleteButton = deleteButtonTags();
  filterSection.innerHTML += deleteButton;
};

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
  let macBookAir12 = createProduct('Macbook Air', 1000, 4, 100, 'Apple',)
  let macBookPro = createProduct('Macbook Pro', 1500, 4, 3, 'Apple')
  let macBookProMax = createProduct('Macbook Pro Max', 2000, 1, 1, 'Apple')
  let hpEssential = createProduct('HP Essentials', 1000, 4, 200, 'Hp')
  let hpPro = createProduct('HP Pro', 1500, 4, 10, 'Hp')
  let alienWare12 = createProduct('Alienware 12"', 1000, 3, 20, 'Dell')
  let alienWarePro = createProduct('Alienware Pro', 1500, 4, 20, 'Dell')
  let alienWareProMax = createProduct('Alienware Pro Max', 2000, 5, 2, 'Dell')
  let huaweiOne = createProduct('Huawei One', 1000, 2, 4, 'Huawei')
  let huaweiTwo = createProduct('Huawei Two', 1500, 5, 4, 'Huawei')
};
listOfProducts();

//invocación del render y agregarlo al DOM
products.forEach(product => renderProductElements(product));

// renderFilterByPrice();
const priceFilters = document.querySelectorAll('.priceInput');
renderDeleteButton();
const deleteButton = document.querySelector('.delete');
const selectSellerFilter = document.getElementById('sellersOption');

//fabrica de vendedores
const SELLER_OPTIONS = {
  'apple': 'Apple',
  'hp': 'HP',
  'dell': 'Dell',
  'huawei': 'Huawei',
};
const addOptionsToSellerFilter = () => {
  Object.keys(SELLER_OPTIONS).forEach((seller) => {
    const option = document.createElement('option');
    option.value = seller;
    option.innerText = SELLER_OPTIONS[seller];
    selectSellerFilter.append(option);
  });
};
addOptionsToSellerFilter();
//filtro por vendedor
const filteredSellers = (selectedSeller) => {
  productsSection.innerHTML = '';
  seller = products.filter(product => product.seller == selectedSeller);
  seller.forEach(seller => renderProductElements(seller))
};

//filtro por precio
const filteredPrices = () => {
  productsSection.innerHTML = '';
  price = products.filter(product => product.price == 1000);
  price.forEach(product => renderProductElements(product))
}
//borrar filtros
const deleteFilters = () => {
  productsSection.innerHTML = ''
  products.forEach(product => renderProductElements(product));
};

//EventListeners
deleteButton.addEventListener('click', deleteFilters);

selectSellerFilter.addEventListener('change', (ev) => {
  const selectedSeller = ev.target.value;
  const selectedSellerCapital = selectedSeller.charAt(0).toUpperCase() + selectedSeller.slice(1);
  filteredSellers(selectedSellerCapital)
});

