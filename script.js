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
  <select name="seller" id="seller">
    <option value="default">Todos</option>
    <option value="apple">Apple</option>
    <option value="hp">HP</option>
    <option value="dell">Dell</option>
    <option value="huawei">Huawei</option>
  </select>`
};
const renderSellerFilter = () => {
  let filters = filterSellerTemplate();
  filterSection.innerHTML += filters
};
renderSellerFilter();
let selectFilter = document.querySelector('#seller');
selectFilter.addEventListener('change', function () {
  console.log('hola')
});
//const sellerFilter () => {
//toma el valor de la casilla de select
//filtra los elementos del array que incluyen el nombre del select
//products.filter(product => product.seller == 'Apple')
//limpia el DOM
//invoca render con los elementos filtrados

// filtro por numero
//product.filter (product === 'precio del checkbox')
//si el numero es menor a lo marcado se eliminan del DOM

//Boton eliminar filtros:
//tags para crear el boton en el DOM
//addEventListener('click', deleteFilters)
//const deleteFilters = () => {
//elimina el DOM
//hace render del array original
// }

const deleteButtonTags = () => {
  return `<button class="delete"></button>`
}
const renderDeleteButton = () => {
  const deleteButton = deleteButtonTags();
  filterSection.innerHTML += deleteButton;
}
renderDeleteButton()