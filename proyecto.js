function obtenerId(nombre) {
    if (nombre == 'Laptop Pro X') { return 'numlaptop'; }
    if (nombre == 'Audífonos Bass') { return 'numAudifonos'; }
    if (nombre == 'Phone Z 2024') { return 'numCelular'; }
    if (nombre == 'iPhone 15 Pro') { return 'numiPhone'; }
    if (nombre == 'PlayStation 5') { return 'numPS5'; }
    if (nombre == 'Xbox Series X') { return 'numXbox'; }
    if (nombre == 'iPad Air') { return 'numipad'; }
    if (nombre == 'Apple Watch S9') { return 'numAppleWatch'; }
    if (nombre == 'Monitor 144Hz') { return 'numMonitor'; }
    if (nombre == 'Teclado RGB') { return 'numTeclado'; }
    if (nombre == 'Mouse Pro') { return 'numMouse'; }
    if (nombre == 'Cámara 4K') { return 'numCamara'; }
    return '';
}

window.onload = function () {
    var memoria = localStorage.getItem('carritoFatics');
    var carrito;
    if (memoria == null) {
        carrito = {};
    } else {
        carrito = JSON.parse(memoria);
    }

    for (var nombre in carrito) {
        var cantidad = carrito[nombre].cantidad;
        var id = obtenerId(nombre);
        var elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = cantidad;
        }
    }
    actualizarTotalCarrito();
};

function verMenu() {
    var menu = document.getElementById('menuPrincipal');
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "60px";
        menu.style.right = "0";
        menu.style.background = "#2c3e50";
        menu.style.width = "100%";
    }
}

function irCarrito() {
    window.location.href = 'carrito.html';
}

function agregar(nombre, precio) {
    var memoria = localStorage.getItem('carritoFatics');
    var carrito;
    if (memoria == null) {
        carrito = {};
    } else {
        carrito = JSON.parse(memoria);
    }

    if (carrito[nombre] == undefined) {
        carrito[nombre] = { precio: precio, cantidad: 1 };
    } else {
        carrito[nombre].cantidad = carrito[nombre].cantidad + 1;
        carrito[nombre].precio = precio;
    }

    localStorage.setItem('carritoFatics', JSON.stringify(carrito));

    var id = obtenerId(nombre);
    var elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerText = carrito[nombre].cantidad;
    }
    actualizarTotalCarrito();
}

function quitar(nombre) {
    var memoria = localStorage.getItem('carritoFatics');
    var carrito;
    if (memoria == null) {
        carrito = {};
    } else {
        carrito = JSON.parse(memoria);
    }

    if (carrito[nombre] != undefined) {
        if (carrito[nombre].cantidad > 0) {
            carrito[nombre].cantidad = carrito[nombre].cantidad - 1;
        }
    }

    localStorage.setItem('carritoFatics', JSON.stringify(carrito));

    var id = obtenerId(nombre);
    var elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerText = carrito[nombre].cantidad;
    }
    actualizarTotalCarrito();
}

function actualizarTotalCarrito() {
    var memoria = localStorage.getItem('carritoFatics');
    var carrito;
    if (memoria == null) {
        carrito = {};
    } else {
        carrito = JSON.parse(memoria);
    }

    var total = 0;
    for (var nombre in carrito) {
        total = total + carrito[nombre].cantidad;
    }
    document.getElementById('contadorCarrito').innerText = total;
}

function validarFormulario(e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    alert(nombre + ", su mensaje fue enviado");
    document.getElementById('formContacto').reset();
}

// Escuchamos el evento 'resize' (cuando se cambia el tamaño de la ventana)
window.addEventListener('resize', function () {
    // Verificamos si el ancho de la pantalla ahora es mayor a 768px (tu punto de quiebre CSS)
    if (window.innerWidth > 768) {
        var menu = document.getElementById('menuPrincipal');

        // Aseguramos que el elemento exista antes de intentar modificarlo
        if (menu) {
            // Limpiamos los estilos en línea críticos que agrega la función verMenu().
            // Al asignar una cadena vacía "", le decimos al navegador que elimine ese estilo en línea
            // y vuelva a usar lo que dicte la hoja de estilos CSS.
            menu.style.display = "";
            menu.style.flexDirection = "";
            menu.style.position = "";
            menu.style.width = "";
            menu.style.top = "";
            menu.style.right = "";
            menu.style.background = "";

            // NOTA: Una forma más agresiva pero efectiva si solo usas JS para esto
            // es limpiar todos los estilos en línea de golpe:
            // menu.removeAttribute("style");
        }
    }
});