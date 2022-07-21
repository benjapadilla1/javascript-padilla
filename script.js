const placas = [{
        nombre: "PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3080TI GAMING PRO 12GB GDDR6X 384 BIT LHR",
        precio: 254099,
        precio_coutas: "12 cuotas sin interés de $27950.92",
        imagen: "fotos/placa_1.jpg",
    },
    {
        nombre: "PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3080 TI GAMEROCK 12GB GDDR6 384BIT LHR",
        precio: 323399,
        precio_coutas: "12 cuotas sin interés de $35573.92",
        imagen: "fotos/placa_2.jpg",
    },
    {
        nombre: "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3080TI GAMING X TRIO 12GB LHR",
        precio: 329169,
        precio_coutas: "12 cuotas sin interés de $36208.67",
        imagen: "fotos/placa_3.jpg",
    },
    {
        nombre: "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3080 TI VENTUS 3X OC 12GB GDDR6 LHR",
        precio: 334949,
        precio_coutas: "12 cuotas sin interés de $36844.42",
        imagen: "fotos/placa_4.jpg",
    },
]
const monitores = [{
        nombre: "MONITOR 32 VIEWSONIC ELITE XG320U 150HZ 4K",
        precio: 346499,
        precio_coutas: "12 cuotas sin interés de $38114.92",
        imagen: "fotos/monitor_1.png",
    },
    {
        nombre: "MONITOR 49 SAMSUNG LC49J890D SUPER ULTRAWIDE CURVO GAMING 144HZ",
        precio: 259859,
        precio_coutas: "12 cuotas sin interés de $28584.50",
        imagen: "fotos/monitor_2.png",
    },
    {
        nombre: "MONITOR 27 ZOWIE XL2746K LED",
        precio: 202109,
        precio_coutas: "12 cuotas sin interés de $22232",
        imagen: "fotos/monitor_3.png",
    },
    {
        nombre: "MONITOR 27 VIEWSONIC ELITE XG270QG 165HZ",
        precio: 187099,
        precio_coutas: "12 cuotas sin interés de $20580.92",
        imagen: "fotos/monitor_4.png",
    },
]
let arrayCompleto = [monitores, placas]

let listaPlacas = document.getElementById("PlacasDeVideo")
let listaMonitores = document.getElementById("Monitores")


for (let placa of placas) {
    listaPlacas.innerHTML += `
            <div class="div_padre">
            <h3>${placa.nombre}</h3>   
            <strong> Precio contado: ${placa.precio}</strong>
            <strong> Precio con cuotas: ${placa.precio_coutas}</strong>
            <div class="imagen"><img src="${placa.imagen}"</div>
            <div><button id="btn">Comprar</button></div> 
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
    <div><button id="btn">Comprar</button></div> 
    </div>
`
}

let boton = document.getElementById("btn")
let mensaje_compra= document.getElementById("Compra")

function comprar(){
    mensaje_compra.innerHTML+= `<div class="estilo_compra">Se realizó su compra!</div>`
}
boton.addEventListener("click", comprar)