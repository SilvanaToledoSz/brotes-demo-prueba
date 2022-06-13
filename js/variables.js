debugger

let usuario = prompt("Hola ¿cómo te llamas?")

// Condicional si coloca el nombre
if ((usuario !="") && (usuario != null)) {

            //Solicito nombre de producto y reviso si está:
            buscarProducto()

                // Buscamos y confirmamos si tenemos stock
                resultado.compararStock() 
                        
            
} else {
    alert("Si no ingresás el nombre, no podrás comprar en esta web. Actualizá la página si querés volver a intentarlo.")
}

