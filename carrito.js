window.onload = function () {
    var carrito = JSON.parse(localStorage.getItem('carritoFatics'));
    if (!carrito) {
        carrito = {};
    }

    var cuerpoTabla = document.getElementById('cuerpoTabla');
    var totalGeneral = 0;
    var hayProductos = false;

    cuerpoTabla.innerHTML = '';

    for (var nombre in carrito) {
        var producto = carrito[nombre];

        if (producto.cantidad > 0) {
            hayProductos = true;
            var subtotal = producto.precio * producto.cantidad;
            totalGeneral = totalGeneral + subtotal;

            var fila = '<tr>' +
                '<td>' + nombre + '</td>' +
                '<td>$' + producto.precio + '</td>' +
                '<td>' + producto.cantidad + '</td>' +
                '<td>$' + subtotal + '</td>' +
                '</tr>';

            cuerpoTabla.innerHTML = cuerpoTabla.innerHTML + fila;
        }
    }

    if (!hayProductos) {
        cuerpoTabla.innerHTML = '<tr><td colspan="4" style="text-align:center">El carrito está vacío</td></tr>';
    }

    document.getElementById('textoTotal').innerText = totalGeneral;
};

function finalizarCompra(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;

    alert("¡Gracias por tu compra, " + nombre + "! \nTu pedido ha sido procesado correctamente.");

    localStorage.removeItem('carritoFatics');

    window.location.href = 'proyecto.html';
}