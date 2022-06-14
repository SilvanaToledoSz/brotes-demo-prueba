debugger

let usuario = prompt("Hola ¿cómo te llamas?")

// Condicional si coloca el nombre
if ((usuario !="") && (usuario != null)) {

            //Solicito nombre de producto y reviso si está:
            buscarProducto()

                // Buscamos y confirmamos si tenemos stock                
                compararStock() 

                // Aplico el valor IVA:
                resultado.valorIva()
                console.log(resultado.valorBruto)
                alert("El precio con IVA incluido es "+ resultado.valorBruto)

                    // Calculo el valor por la cantidad de unidades solicitadas:
                    nroUnidades()

                    //Consulto si quiere avanzar con la compra
                    let avanzarCompra = confirm("¿Confirmás la compra?")  
                    console.log(avanzarCompra)                    

                        if (avanzarCompra == true) {
                            //Registro que el producto fue vendido
                            resultado.productoVendido()
                            console.log(resultado.vendido)
                        }

                            //Cargo el producto vendido al carrito
                            agregarCarrito() 

                                // Pregunto si quiere comprar algo más
                                let comprar = confirm(usuario + " ¿querés comprar algo más?" )
                                if (comprar == false) {
                                    sumarTodo()

                                } else {
                                    buscarProducto() 
                                }

                    
                        
            
} else {
    alert("Si no ingresás el nombre, no podrás comprar en esta web. Actualizá la página si querés volver a intentarlo.")
}

