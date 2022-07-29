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
class Producto{
    constructor(nombre,precio,precio_coutas,categoria,imagen,boton){
        this.nombre=nombre
        this.precio=precio
        this.precio_coutas=precio_coutas
        this.categoria=categoria
        this.imagen=imagen
        this.boton= boton 
    }
}
const placa1= new Producto("PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3080TI GAMING PRO 12GB GDDR6X 384 BIT LHR",254099,"12 cuotas sin interés de $27950.92","placas","fotos/placa_1.jpg",`<button id= boton_placa1 class="btn btn-primary">Comprar</button> `)
const placa2= new Producto("PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3080 TI GAMEROCK 12GB GDDR6 384BIT LHR",323399,"12 cuotas sin interés de $35573.92","placas","fotos/placa_2.jpg", `<button id= boton_placa2 class="btn btn-primary">Comprar</button> `)
const placa3= new Producto("PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3080TI GAMING X TRIO 12GB LHR",329169,"12 cuotas sin interés de $36208.67","placas","fotos/placa_3.jpg",`<button id= boton_placa3 class="btn btn-primary">Comprar</button> `) 
const placa4= new Producto("PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3080 TI VENTUS 3X OC 12GB GDDR6 LHR",334949,"12 cuotas sin interés de $36844.42","placas","fotos/placa_4.jpg",`<button id= boton_placa4 class="btn btn-primary">Comprar</button> `)

const placas=[placa1,placa2,placa3,placa4]

const monitor1= new Producto("MONITOR 32 VIEWSONIC ELITE XG320U 150HZ 4K",346499,"12 cuotas sin interés de $38114.92","monitor","fotos/monitor_1.png",`<button id= boton_monitor1 class="btn btn-primary">Comprar</button> `)
const monitor2= new Producto("MONITOR 49 SAMSUNG LC49J890D SUPER ULTRAWIDE CURVO GAMING 144HZ",259859,"259859,12 cuotas sin interés de $28584","monitor","fotos/monitor_2.png",`<button id= boton_monitor2 class="btn btn-primary">Comprar</button> `)
const monitor3= new Producto("MONITOR 27 ZOWIE XL2746K LED",202109,"12 cuotas sin interés de $22232","monitor","fotos/monitor_3.png",`<button id= boton_monitor3 class="btn btn-primary">Comprar</button> `)
const monitor4= new Producto("MONITOR 27 VIEWSONIC ELITE XG270QG 165HZ",187099,"12 cuotas sin interés de $20580.92","monitor","fotos/monitor_4.png",`<button id= boton_monitor4 class="btn btn-primary">Comprar</button> `)

const monitores=[monitor1,monitor2,monitor3,monitor4]

const placasMonitores=[placa1,placa2,placa3,placa4,monitor1,monitor2,monitor3,monitor4]

const botones = [placa1.boton,placa2.boton,placa3.boton,placa4.boton,monitor1.boton,monitor2.boton,monitor3.boton,monitor4.boton]

let carrito = []

let listaPlacas = document.getElementById("PlacasDeVideo")
let listaMonitores = document.getElementById("Monitores")
const botonCarrito= document.getElementById("botonCarrito")

for (let placa of placas) {
    listaPlacas.innerHTML += `
            <div class="div_padre">
            <h3>${placa.nombre}</h3>   
            <strong> Precio contado: ${placa.precio}</strong>
            <strong> Precio con cuotas: ${placa.precio_coutas}</strong>
            <div class="imagen"><img src="${placa.imagen}"</div>
            <div>${placa.boton}</div> 
            </div>
    `
}

for (let monitor of monitores) {
    listaMonitores.innerHTML += `
    <div class="div_padre">
    <h3>${monitor.nombre}</h3>   
    <strong> Precio contado: ${monitor.precio}</strong>
    <strong> Precio con cuotas: ${monitor.precio_coutas}</strong>
    <div class="imagen"><img src="${monitor.imagen}"</div>
    <div>${monitor.boton}<div> 
    </div>
`
}

function añadirCarritoPlacas(){
    for (let carrito of placas){
        localStorage.setItem("placa seleccionada",JSON.stringify(carrito.nombre))
    }
    carrito.push(JSON.parse(localStorage.getItem("placa seleccionada")))
    // carrito_compra.innerHTML += `${JSON.stringify(placa1.nombre)}` 
}
function añadirCarritoMonitores(){
    for(let carrito of monitores){
        localStorage.setItem("monitor seleccionado",JSON.stringify(carrito.nombre,carrito.precio))
    }
    carrito.push(JSON.parse(localStorage.getItem("placa seleccionada")))
}
//Botones de placas para el carrito
boton_placa1.addEventListener('click', () => {
    añadirCarritoPlacas(placa1.nombre)
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(placa1.nombre)} </h5>
    <p class="card-text">${placa1.precio}</p>
    </div>
</div>` 
})
boton_placa2.addEventListener('click', () => {
    añadirCarritoPlacas(placa2.nombre)
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(placa2.nombre)} </h5>
    <p class="card-text">${placa2.precio}</p>
    </div>
</div>` 
})
boton_placa3.addEventListener('click', () => {
    añadirCarritoPlacas(placa3.nombre)
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(placa3.nombre)} </h5>
    <p class="card-text">${placa3.precio}</p>
    </div>
</div>` 
})
boton_placa4.addEventListener('click', () => {
    añadirCarritoPlacas(placa4.nombre)
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(placa4.nombre)} </h5>
    <p class="card-text">${placa4.precio}</p>
    </div>
</div>` 
})
//Botones de monitores para el carrito
boton_monitor1.addEventListener('click', () => {
    añadirCarritoMonitores()
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(monitor1.nombre)} </h5>
    <p class="card-text">${monitor1.precio}</p>

    </div>
</div>` 
})
boton_monitor2.addEventListener('click', () => {
    añadirCarritoMonitores()
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(monitor2.nombre)} </h5>
    <p class="card-text">${monitor2.precio}</p>

    </div>
</div>` 
})
boton_monitor3.addEventListener('click', () => {
    añadirCarritoMonitores()
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(monitor3.nombre)} </h5>
    <p class="card-text">${monitor3.precio}</p>

    </div>
</div>` 
})
boton_monitor4.addEventListener('click', () => {
    añadirCarritoMonitores()
    carrito_compra.innerHTML += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${JSON.stringify(monitor4.nombre)} </h5>
    <p class="card-text">${monitor4.precio}</p>
    </div>
</div>` 
})
