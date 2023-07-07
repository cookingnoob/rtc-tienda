//Elementos DOM
let productsSection = document.querySelector('.products');
let filterSection = document.querySelector('.filter');
// Productos
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
  let hpEssential = createProduct('HP Essentials', 1000, 4, 200, 'HP')
  let hpPro = createProduct('HP Pro', 1500, 4, 10, 'HP')
  let alienWare12 = createProduct('Alienware 12"', 1000, 3, 20, 'Dell')
  let alienWarePro = createProduct('Alienware Pro', 1500, 4, 20, 'Dell')
  let alienWareProMax = createProduct('Alienware Pro Max', 2000, 5, 2, 'Dell')
  let huaweiOne = createProduct('Huawei One', 1000, 2, 4, 'Huawei')
  let huaweiTwo = createProduct('Huawei Two', 1500, 5, 4, 'Huawei')
}

listOfProducts();
const templateTags = (product) => {
  return ` <div class="itemContainer">
 <img src="${product.image}" alt="${product.name}">
 <p class="name">${product.name}</p>
 <p class="seller">${product.seller}</p>
 <p class="price">$${product.price}</p>
 <p class="stars">Estrellas: ${product.stars}</p>
 <p class="reviews">Reviews: ${product.reviews}</p>
</div>`
};

const renderElements = (product) => {
  let template = templateTags(product);
  productsSection.innerHTML += template
};

products.forEach(product => renderElements(product));

//Filtros:
//filtros por vendedor
const filterSellerTemplate = () => {
  return `
  <select name="seller" id="sellers" class="sellers">
    <option class="sellerOption" value="default">Todos</option>
    <option class="sellerOption" value="apple">Apple</option>
    <option class="sellerOption" value="hp">HP</option>
    <option class="sellerOption" value="dell">Dell</option>
    <option class="sellerOption" value="huawei">Huawei</option>
  </select>`
};

const renderSellerFilter = () => {
  let filters = filterSellerTemplate();
  filterSection.innerHTML += filters
};
renderSellerFilter();

const sellerSection = document.querySelector('.sellers');
const selectSeller = document.querySelectorAll('.sellerOption');


// selectSeller.addEventListener('change', (event) => {
//   console.log(`${event.target.value}`)
// })


const filteredSellers = () => {
  productsSection.innerHTML = '';
  seller = products.filter(product => product.seller == 'Apple');
  seller.forEach(seller => renderElements(seller))
};
// filteredSellers()


// filtro por numero
const filterByPriceTags = () => {
  return `
  <label for="1000">$1000</label>
  <input type="radio" name="1000" id="1000" class="priceInput">
  <label for="1500">$1500</label>
  <input type="radio" name="1500" id="1500" class="priceInput">
  <label for="1000">$2000</label>
  <input type="radio" name="2000" id="2000" class="priceInput">
`
}
const renderFilterByPrice = () => {
  let priceTags = filterByPriceTags();
  filterSection.innerHTML += priceTags
}
renderFilterByPrice()

const priceFilters = document.querySelectorAll('.priceInput');

priceFilters.forEach(element => {
  element.addEventListener('click', function () {
    console.log('hola')
  })
});

const filteredPrices = () => {
  productsSection.innerHTML = '';
  price = products.filter(product => product.price == 1000);
  price.forEach(product => renderElements(product))
}
filteredPrices()

//product.filter (product === 'precio del checkbox')
//si el numero es menor a lo marcado se eliminan del DOM

//Boton eliminar filtros:
const deleteButtonTags = () => {
  return `<button class="delete"></button>`
}
const renderDeleteButton = () => {
  const deleteButton = deleteButtonTags();
  filterSection.innerHTML += deleteButton;
}
renderDeleteButton();

let deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click', function () {
  productsSection.innerHTML = ''
  products.forEach(product => renderElements(product));
})


console.log(sellerSection);

console.log(priceFilters);

selectSeller.forEach(seller => console.log(seller))