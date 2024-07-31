"use strict";

let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from submitting

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let informacion = [];

    informacion[0] = "Nombre: " + nombre;
    informacion[1] = "Apellido: " + apellido;
    informacion[2] = "Correo: " + correo;
    informacion[3] = "Teléfono: " + telefono;
    informacion[4] = "Mensaje: " + mensaje;

    let contenidoFormateado = informacion.join("\n");

    // Create a Blob with the formatted content
    let blob = new Blob([contenidoFormateado], { type: "text/plain;charset=utf-8" });

    // Save the information to a .txt file
    saveAs(blob, "contact.txt");
});