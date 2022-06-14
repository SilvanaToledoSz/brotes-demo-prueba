// Implementación de array de objetos

const plantas = []
plantas.push (new Planta ("rosal", 1200.0, 1.1, 0.30, 7.5, 13, 0, 0))
plantas.push (new Planta ("begonia", 750.0, 0.3, 0.25, 1.2, 25, 0, 0))
plantas.push (new Planta ("malvon", 525.0, 0.5, 0.5, 1.1, 10, 0, 0))
plantas.push (new Planta ("ficus", 2200, 1.5, 0.9, 4.5, 1, 0, 0))
plantas.push (new Planta ("rosario bananita", 450, 0.45, 0.15, 2.25, 0, 0, 0))
plantas.push (new Planta ("cactus espiralado", 250, 0.15, 0.07, 0.3, 0, 0, 0))

const carritoFinal = []

// otras variables

let precioIva = 0
let valorEnvio = 650
let direccionLocal = "Calle falsa 123, Tierra del Fuego, Argentina."
let porcentajeMP = 1.35
let productoUnidades = 0
let envioDom = 0
let totalFinal = 0
let productoElegido = 0
let resultado = ""
let comprar = false


// otras funciones sobre el array de objetos

function buscarProducto() {
    // Consultamos cuál producto quiere     
    let productoElegido = prompt("¿Cuál producto del catálogo te gustó")  
    if ((productoElegido !="") && (productoElegido != null)) {
       // Implementación de método find sobre el array plantas
        resultado = plantas.find (p => p.nombre === productoElegido.toUpperCase())
            console.table(resultado)
    }  else {
        alert("Ingrese un dato válido")
    }
}

function compararStock() {
    if (resultado.stock > 0) {
        alert("Quedan disponibles "+ resultado.stock +" unidades. \nEl valor sin IVA es: " + resultado.valorBruto)
    } else {
        alert("No quedan disponibles unidades. Muchas gracias por tu interes")
    }
}

function nroUnidades() {
    // Pregunto cuántas unidades va a comprar
    let productoUnidades = parseInt(prompt("¿Cuántas unidades querés comprar?"))
        if ((productoUnidades <= resultado.stock)) {
            resultado.precioUnidades = parseInt(resultado.valorBruto * productoUnidades)
            //Informo precio total
            alert(`El precio total por ${productoUnidades} unidades es $ ${resultado.precioUnidades}`)
        } else {
            alert("No contamos con esa cantidad")
        }
}

//Cargo el producto vendido al carrito - Implementación de método filter sobre el array plantas

function agregarCarrito() {
    const carritoFinal = plantas.filter(p => p.vendido == true)
    console.table(carritoFinal)
}

function sumarTodo() {
    let totalFinal = carritoFinal.reduce( (totalizar, p) => totalizar + parseInt(p.precioUnidades), 0)
    console.log(totalFinal)
    // CIERRE DE COMPRA
    alert(`CONFIRMACIÓN DE COMPRA: \nNombre: ${usuario} \nImporte Final: $ ${totalFinal} \n\n¡Muchas gracias, vuelva prontos!`)    
} 

const precioFinal = (a,b) => a + b

