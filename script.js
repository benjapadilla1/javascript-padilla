class Auto {
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

}
const Auto1 = new Auto("BMW", "X6", 179900);
const Auto2 = new Auto("Audi", "R8", 186500);
const Auto3 = new Auto("Ford", "Territory", 41600);
const Auto4 = new Auto("Toyota", "Yaris GR", 60000);

do {
    autobuscado = prompt("Ingrese el auto que desee, nuestras marcas son los siguientes: BMW , Audi, Ford, Toyota").toLowerCase()
    if (autobuscado !== "bmw" && autobuscado !== "audi" && autobuscado !== "ford" && autobuscado !== "toyota") {
        alert("Por favor ingrese una marca de las previamente mencionadas")
    } if (autobuscado=="bmw"){
        alert(`El unico modelo que nos queda de la marca ${Auto1.marca} es el ${Auto1.modelo}, y cuesta ${Auto1.precio} dólares`)
    }
    else if (autobuscado=="audi"){
        alert(`El unico modelo que nos queda de la marca ${Auto2.marca} es el ${Auto2.modelo}, y cuesta ${Auto2.precio} dólares`)
    }
    else if (autobuscado=="ford"){
        alert(`El unico modelo que nos queda de la marca ${Auto3.marca} es el ${Auto3.modelo}, y cuesta ${Auto3.precio} dólares`)
    }
    else if (autobuscado=="toyota"){
        alert(`El unico modelo que nos queda de la marca ${Auto4.marca} es el ${Auto4.modelo}, y cuesta ${Auto4.precio} dólares`)
    }
} while (autobuscado !== "bmw" && autobuscado !== "audi" && autobuscado !== "ford" && autobuscado !== "toyota")

const Autos = [Auto1, Auto2, Auto3, Auto4]

