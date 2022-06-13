class Planta {
    constructor(nombre, valorBruto, alto, ancho, peso, stock, precioUnidades) {
        this.nombre = nombre.toUpperCase();
        this.valorBruto = parseFloat(valorBruto);
        this.alto = parseFloat(alto);
        this.ancho = parseFloat(ancho);
        this.peso = parseFloat(peso);
        this.stock = parseInt(stock);
        this.vendido = false;       
        this.precioUnidades = parseInt(precioUnidades);
    }    

    valorIva() {
        this.valorBruto = parseInt(this.valorBruto * 1.21)
    }   
    productoVendido() {
        this.vendido = true;
    }
    compararStock () {
        if (this.stock > 0) {
            alert("Quedan disponibles "+ this.stock +" unidades. \nEl valor sin IVA es: " + this.valorBruto)
        } else {
            alert("No quedan disponibles unidades. Muchas gracias por tu interes")
        }
    }

}









