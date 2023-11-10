function changeName() {
    // Preguntar al usuario su nombre
    var nuevoNombre = prompt("¿Cuál es tu nombre?");

    // Verificar si el usuario ingresó un nombre
    if (nuevoNombre !== null && nuevoNombre !== "") {
        // Cambiar el contenido del elemento con id 'saludo' al nuevo nombre
        document.getElementById("saludo").innerHTML = "Hola " + nuevoNombre;
    }
}