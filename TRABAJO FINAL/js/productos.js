"use strict";
/*// Declaración de arrays para productos, precios y cantidades disponibles.*/
let arrProductos = ["Café Arlistan", "Fideos Lucchetti", "Fideos San Agustin", "Galletas Desfile", "Harina 0000 Pureza",
    "Harina Leudante Pureza", "Detergente Magistral", "Vino Malbec Estancia Mendoza", "Vino Merlot Estancia Mendoza",
    "Pure de Tomate Molto", "Tomate Triturado", "Yerba Mate Don Omar"];
let arrPrecio = [2199, 849, 625, 819, 779, 985, 999, 1999, 1999, 599, 1339, 2559];
let arrCant = [2, 5, 2, 3, 2, 3, 15, 18, 22, 15, 3, 5];
let carrito = {};/*Declaración de un objeto vacío para almacenar los productos seleccionados y sus cantidades.*/

let botones = document.querySelectorAll("button");/* Selección de todos los botones "Añadir al carrito"*/
let cantidades = document.querySelectorAll("#cant");/*Selección de todos los inputs de cantidad.*/
let btnFinalizarCompra = document.getElementById("finalizarCompra");


/*Bucle para añadir un evento de clic a cada botón*/
for (let i = 0; i < botones.length; i++) {
    /*Añadir un evento de clic a cada botón.*/
    botones[i].addEventListener("click", function() {
        let cantidad = parseInt(cantidades[i].value);
        if (cantidad > 0 && (arrCant[i] - cantidad) >= 0) { /*Verificar si la cantidad es válida y hay suficiente stock.*/
            if (carrito[i] !== undefined) { /*Si el producto ya está en el carrito, incrementar su cantidad.*/
                carrito[i] += cantidad;
            } else {
                carrito[i] = cantidad;/* Si el producto no está en el carrito, añadirlo con la cantidad seleccionada.*/

            }
            actualizarTotal();
        } else {
            alert("Ingrese una cantidad válida o no hay suficiente stock.");
        }
    });
}


function actualizarTotal() {
    let total = 0;/*Inicializar el total en cero.*/
    for (let index in carrito) { /*// Recorrer el carrito y calcular el total.*/
        if (carrito[index] !== undefined) {
            total += arrPrecio[index] * carrito[index];
        }
    }
    document.getElementById("total").innerText = total; /*/ Actualizar el valor del total en el DOM.*/
}

