const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
let darkMode
if (localStorage.getItem("theme")) {
  darkMode = localStorage.getItem("theme")
} else {
  localStorage.setItem("theme", "light")
}
if (darkMode == "dark") {
  document.body.classList.add("darkMode")
}

botonDarkMode.addEventListener("click", () => {
  document.body.classList.add("darkMode")
  localStorage.setItem("theme", "dark")
})
botonLightMode.addEventListener("click", () => {
  document.body.classList.remove("darkMode")
  localStorage.setItem("theme", "light")
})

let prodprox = document.getElementById("ProductosProximos")
fetch('productos.json').then(function (response) {
  response.json().then(function (data) {
    for (let producto of data) {
      ProductosProximos.innerHTML += `
  <div class="row-md-6 col-md-6">
  <div class="col-12 col-md-6">
      <div class="item shadow mb-4">
          <h3 class="item-title">${producto.nombre}</h3>
          <h3>${producto.precio_coutas}</h3>
          <img class="item-image" src=${producto.imagen}>
          <div class="item-details">
              <h4 class="item-price">$${producto.precio}</h4>
          </div>
      </div>
  </div>
`}
  })
})

class Producto {
  constructor(nombre, informacion, precio, precio_coutas, categoria, imagen, boton) {
    this.nombre = nombre
    this.informacion = informacion
    this.precio = precio
    this.precio_coutas = precio_coutas
    this.categoria = categoria
    this.imagen = imagen
    this.boton = boton
  }
}
const placa1 = new Producto("PLACA DE VIDEO PALIT NVIDIA", "GEFORCE RTX 3080TI GAMING PRO 12GB GDDR6X 384 BIT LHR", 254.099, "12 cuotas sin interés de $27950.92", "placas", "fotos/placa_1.jpg", `<button id= boton_placa1 class="btn btn-primary">Comprar</button> `)
const placa2 = new Producto("PLACA DE VIDEO PALIT NVIDIA", "GEFORCE RTX 3080 TI GAMEROCK 12GB GDDR6 384BIT LHR", 323.399, "12 cuotas sin interés de $35573.92", "placas", "fotos/placa_2.jpg", `<button id= boton_placa2 class="btn btn-primary">Comprar</button> `)
const placa3 = new Producto("PLACA DE VIDEO MSI NVIDIA", "GEFORCE RTX 3080TI GAMING X TRIO 12GB LHR", 329.169, "12 cuotas sin interés de $36208.67", "placas", "fotos/placa_3.jpg", `<button id= boton_placa3 class="btn btn-primary">Comprar</button> `)
const placa4 = new Producto("PLACA DE VIDEO MSI NVIDIA", "GEFORCE RTX 3080 TI VENTUS 3X OC 12GB GDDR6 LHR", 334.949, "12 cuotas sin interés de $36844.42", "placas", "fotos/placa_4.jpg", `<button id= boton_placa4 class="btn btn-primary">Comprar</button> `)

const placas = [placa1, placa2, placa3, placa4]

const monitor1 = new Producto("MONITOR 32 VIEWSONIC ", "ELITE XG320U 150HZ 4K", 346.499, "12 cuotas sin interés de $38114.92", "monitor", "fotos/monitor_1.png",)
const monitor2 = new Producto("MONITOR 49 SAMSUNG ", "LC49J890D SUPER ULTRAWIDE CURVO GAMING 144HZ", 259.859, "259859,12 cuotas sin interés de $28584", "monitor", "fotos/monitor_2.png",)
const monitor3 = new Producto("MONITOR 27 ZOWIE ", "XL2746K LED", 202.109, "12 cuotas sin interés de $22232", "monitor", "fotos/monitor_3.png",)
const monitor4 = new Producto("MONITOR 27 VIEWSONIC ", "ELITE XG270QG 165HZ", 187.099, "12 cuotas sin interés de $20580.92", "monitor", "fotos/monitor_4.png",)

const monitores = [monitor1, monitor2, monitor3, monitor4]

const placasMonitores = [placa1, placa2, placa3, placa4, monitor1, monitor2, monitor3, monitor4]

const botones = [placa1.boton, placa2.boton, placa3.boton, placa4.boton, monitor1.boton, monitor2.boton, monitor3.boton, monitor4.boton]


let listaPlacas = document.getElementById("PlacasDeVideo")
let listaMonitores = document.getElementById("Monitores")
const botonCarrito = document.getElementById("botonCarrito")
let divCarrito = document.getElementById("divCarrito")
const boton_carro = document.querySelectorAll(".button")

for (let placa of placas) {
  listaMonitores.innerHTML += `
  <div class="row-md-6 col-md-6">
  <div class="col-12 col-md-6">
      <div class="item shadow mb-4">
          <h3 class="item-title">${placa.nombre}</h3>
          <h3>${placa.informacion}</h3>
          <h3>${placa.precio_coutas}</h3>
          <img class="item-image" src=${placa.imagen}>
          <div class="item-details">
              <h4 class="item-price">$${placa.precio}</h4>
              <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
          </div>
      </div>
  </div>
`
}

for (let monitor of monitores) {
  listaMonitores.innerHTML += `
  <div class="row-md-6 col-md-6">
  <div class="col-12 col-md-6">
      <div class="item shadow mb-4">
          <h3 class="item-title">${monitor.nombre}</h3>
          <h3>${monitor.informacion}</h3>
          <h3>${monitor.precio_coutas}</h3>
          <img class="item-image" src=${monitor.imagen}>
          <div class="item-details">
              <h4 class="item-price">$${monitor.precio}</h4>
              <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
          </div>
      </div>
  </div>
`
}
let carro_de_compra = document.getElementById("carro_de_compra")
carro_de_compra.innerHTML += `<section class="shopping-cart">
<div class="container">
    <h1 class="text-center">CARRITO</h1>
    <div class="shopping-cart-items shoppingCartItemsContainer">
    </div>
    <div class="row">
        <div class="col-12">
            <div class="shopping-cart-total d-flex align-items-center">
                <p class="mb-0">Total</p>
                <p class="ml-4 mb-0 shoppingCartTotal">0$</p>
                <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                    data-delay="2000">
                </div>
                <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                    data-target="#comprarModal">Comprar</button>
            </div>
        </div>
    </div>
    </div>
        </div>
    </div>
</div>
</section>`

const botonesAñadirAlCarrito = document.querySelectorAll('.addToCart');
botonesAñadirAlCarrito.forEach((añadirBoton) => {
  añadirBoton.addEventListener('click', addToCartClicked);
  añadirBoton.addEventListener("click", () => {
    Toastify({
      text: "Se ha añadido el producto al carrito correctamente",
      duration: 3000
    }).showToast();
  });

});


const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);



const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 id="titulo-carrito" class="shopping-cart-item-title" >${itemTitle}</h6>
                <hr>
                <hr>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button id="borrar" class="btn btn-danger buttonDelete"  type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total}`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
  Toastify({
    text: "Se ha eliminado el producto del carrito correctamente",
    duration: 3000,
  }).showToast();

}
function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
  Swal.fire({
    title: "Su compra se realizó con éxito",
    icon: "success",
  })
}