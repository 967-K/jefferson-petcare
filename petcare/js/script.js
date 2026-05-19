function registrar() {
    let usuario = document.getElementById("nuevoUsuario").value;
    let password = document.getElementById("nuevoPassword").value;

    if (usuario === "" || password === "") {
        alert("Complete todos los campos");
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("password", password);

    alert("Registro exitoso");
    window.location.href = "login.html";
}

function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    let usuarioGuardado = localStorage.getItem("usuario");
    let passwordGuardado = localStorage.getItem("password");

    if (usuario === usuarioGuardado && password === passwordGuardado) {
        window.location.href = "mascotas.html";
    } else {
        alert("Datos incorrectos");
    }
}

function seleccionarMascota(nombre) {
    localStorage.setItem("mascota", nombre);
    window.location.href = "solicitud.html";
}

function cerrarSesion() {
    localStorage.clear();
    window.location.href = "login.html";
}

function cargarMascota() {
    let mascota = localStorage.getItem("mascota");
    document.getElementById("mascota").value = mascota;
}

function enviarSolicitud() {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let mascota = document.getElementById("mascota").value;

    if (nombre === "" || telefono === "" || direccion === "") {
        alert("Complete todos los campos");
        return;
    }

    document.getElementById("resumen").innerHTML =
        "Solicitud enviada correctamente <br><br>" +
        "Nombre: " + nombre + "<br>" +
        "Telefono: " + telefono + "<br>" +
        "Direccion: " + direccion + "<br>" +
        "Mascota: " + mascota;
}

function verificarSesion() {
    let usuario = localStorage.getItem("usuario");

    if (usuario === null) {
        window.location.href = "login.html";
    }
}