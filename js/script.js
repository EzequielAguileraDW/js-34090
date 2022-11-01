function armadoPc() {
    let opciones = prompt("Usted seleccionó armado de PC, ingrese su presupuesto disponible y le arrojaremos opciones a su medida.");
    if (opciones > 15000 && opciones < 30000) {
        alert("Intel i3, Asus H310, 8gb RAM Kingston");
    } else if (opciones > 30000 && opciones < 50000) {
        alert("Intel i5, Asus B365, 16gb RAM Kingston");
    } else if (opciones > 50000) {
        alert("Intel i7, Asus Z390, 32gb RAM Kingston");
    } else {
        alert("Ingrese un monto entre $15.000 y $100.000");
    }
}



function remoto() {
    let nombre = prompt("Ingrese su nombre:");
    let celular = prompt("Ingrese su celular:");
    alert(`Hola ${nombre}, en breve me estaré comunicando con usted para asistirlo/a!`);
}



function pago() {
    let forma = prompt("Seleccione su método de pago: 1) MercadoPago, 2) PayPal, 3) Efectivo");

    switch (forma) {
        case "1":
            alert("Usted seleccionó MercadoPago como método de pago.");
            break;
        case "2":
            alert("Usted seleccionó USD como método de pago.");
            break;
        case "3":
            alert("Usted seleccionó efectivo como método de pago.");
            break;
        default:
            alert("Opción incorrecta.");
            break;
    }
}



function calcular() {
    let cantidad = document.querySelectorAll('.cantidad');
    let precio = 1500;
    let total = document.querySelectorAll('.total');

    for (let c = 0; c < cantidad.length; c++) {
        total[c].value = cantidad[c].value * precio;
    }
}
