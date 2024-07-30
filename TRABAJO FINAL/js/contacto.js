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
    
    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}`);

    let blob = new Blob(informacion, { type: "text/plain;charset=utf-8" });
    saveAs(blob, "contact.txt"); // Guarda la información en un archivo .txt// libreria
});
