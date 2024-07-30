"use strict";
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar"); 

let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // Previene la acción del form de actualizar la página
    
    informacion [0] = nombre.value;
    informacion [1] = apellido.value;
    informacion [2] = correo.value;
    informacion [3] = telefono.value;
    informacion [4] = mensaje.value;

    let contenidoFormateado = informacion.join("\n");

//Crear el Blob con el contenido formateado
    let blob = new Blob([contenidoFormateado], { type: "text/plain;charset=utf-8" });

// Guarda la información en un archivo .txt// libreria
    saveAs(blob, "contact.txt"); 
});