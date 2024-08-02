"use strict";

let btnEnviar = document.getElementById("enviar");/*se selecciona el boton  con el id enviar  y se almacena en esta variable */

btnEnviar.addEventListener("click", (e) => {/* se añade un evento  al botón enviar, se hace clik y se ejecuta la función*/
    e.preventDefault(); /*esto hace que podamos manejar el envio del form*/

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
/*obetenemos los valores ingresados por el usuario*/
    let informacion = [];

    informacion[0] = "Nombre: " + nombre;
    informacion[1] = "Apellido: " + apellido;
    informacion[2] = "Correo: " + correo;
    informacion[3] = "Teléfono: " + telefono;
    informacion[4] = "Mensaje: " + mensaje;
/* se inicia el array vacio de info, luego se llenan las posicicones con cadenas de texto que tienen los datos del form*/
    let contenidoFormateado = informacion.join("\n");
/*sirve para hacer un salto de linea*/
    
    let blob = new Blob([contenidoFormateado], { type: "text/plain;charset=utf-8" });/* se crea este objeto que representa un archivo de datos.*/

     /*se guarda la info como texto*/
    saveAs(blob, "contact.txt");
});