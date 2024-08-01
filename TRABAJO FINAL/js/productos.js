"use strict";
let arrProductos = ["Café Arlistan", "Fideos Lucchetti", "Fideos San Agustin", "Galletas Desfile", "Harina 0000 Pureza",
    "Harina Leudante Pureza", "Detergente Magistral", "Vino Malbec Estancia Mendoza", "Vino Merlot Estancia Mendoza",
    "Pure de Tomate Molto", "Tomate Triturado", "Yerba Mate Don Omar"];
let arrPrecio = [2199, 849, 625, 819, 779, 985, 999, 1999, 1999, 599, 1339, 2559];
let arrCant = [5, 5, 2, 3, 2, 3, 15, 18, 22, 15, 3, 5];
let carrito = {}; /* Se inicializa un objeto vacío  que se usa para almacenar los productos seleccionados y sus cantidades. */
let botones = document.querySelectorAll(".item button");/* Se seleccionan todos los botones dentro de los elementos con la clase "item" y se almacenan en la variable  botones */
let cantidades = document.querySelectorAll(".item input[type='number']");/* Se seleccionan todos los inputs de tipo número dentro de los elementos con la clase "item" y se guardan en la variable  cantidades */
const comprarBtn = document.getElementById('comprarBtn');/* : Se obtiene el botón con el ID "comprarBtn" y se almacena en la constante  comprarBtn . */

comprarBtn.addEventListener('click', () => {  /* : Se obtiene el botón con el ID "comprarBtn" y se almacena en la constante  comprarBtn . */
    console.log('Botón Comprar clickeado');
    alert('Compra exitosa');
});

for (let i = 0; i < botones.length; i++) { /* Se inicia un bucle que recorre todos los botones y añade un evento de clic a cada botón para  añadir productos al carrito.*/ 
    botones[i].addEventListener("click", function() {
        let cantidad = parseInt(cantidades[i].value);
        if (cantidad > 0 && (arrCant[i] - cantidad) >= 0) {
            if (carrito[i] !== undefined) {
                carrito[i] += cantidad;
            } else {
                carrito[i] = cantidad;
            }
            actualizarTotal();
        } else {
            alert("Ingrese una cantidad válida o no hay suficiente stock.");
        }
    });
}

function actualizarTotal() {  /*calcula el total de la compra sumando los precios de los productos seleccionados y sus cantidades en el carrito. */
    let total = 0;
    for (let index in carrito) {
        if (carrito[index] !== undefined && carrito[index] > 0) {
            total += arrPrecio[index] * carrito[index];
        }
    }
    document.getElementById("total").innerText = total;
}



















/*"use strict";
let arrProductos = ["Café Arlistan", "Fideos Lucchetti", "Fideos San Agustin", "Galletas Desfile", "Harina 0000 Pureza",
    "Harina Leudante Pureza", "Detergente Magistral", "Vino Malbec Estancia Mendoza", "Vino Merlot Estancia Mendoza",
    "Pure de Tomate Molto", "Tomate Triturado", "Yerba Mate Don Omar"];
let arrPrecio = [2199, 849, 625, 819, 779, 985, 999, 1999, 1999, 599, 1339, 2559];
let arrCant = [2, 5, 2, 3, 2, 3, 15, 18, 22, 15, 3, 5];
let carrito = {};

let botones = document.querySelectorAll(".item button");
let cantidades = document.querySelectorAll(".item .cant");

const comprarBtn = document.getElementById('comprarBtn');

comprarBtn.addEventListener('click', () => {
    console.log('Botón Comprar clickeado');
    alert('Compra exitosa');
});


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        let cantidad = parseInt(cantidades[i].value);
        if (cantidad > 0 && (arrCant[i] - cantidad) >= 0) {
            if (carrito[i] !== undefined) {
                carrito[i] += cantidad;
            } else {
                carrito[i] = cantidad;
            }
            actualizarTotal();
        } else {
            alert("Ingrese una cantidad válida o no hay suficiente stock.");
        }
    });
}
function actualizarTotal() {
    let total = 0; /* Inicializar el total en cero. 
    for (let index in carrito) { 
        if (carrito[index] !== undefined) {
            total += arrPrecio[index] * carrito[index];
        }
    }
    document.getElementById("total").innerText = total; 
    /* Actualizar el valor del total en el DOM. 
    if (total === 0) {
        carrito = {};
    }
}
*/


