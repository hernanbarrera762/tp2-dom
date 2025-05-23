function validarformulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje");

    let errores = [];

    if (!nombre || nombre.length > 50) {
        errores.push("El nombre no puede estar vacío ni tener más de 50 caracteres.");
    }

    if (!apellido || apellido.length > 50) {
        errores.push("El apellido no puede estar vacío ni tener más de 50 caracteres.");
    }

    if (isNaN(edad) || edad < 0) {
        errores.push("Debe ingresar una edad válida y positiva.");
    } else if (edad < 18) {
        errores.push("El usuario debe ser mayor de edad.");
    }

    if (isNaN(altura) || altura < 0 || altura > 230){
        errores.push("La altura debe ser positiva y no mayor a 230 cm.");
    }

    if (!correo || !correo.includes("@")) {
        errores.push("El correo debe contener el símbolo '@'.");
    }

    if (errores.length === 0) {
        mensaje.textContent = "Formulario válido. Los datos se enviaron correctamente.";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = errores.join(" ");
        mensaje.style.color = "red";
    }
}
