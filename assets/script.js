//Con esta función le solicitamos al cliente que ingrese su presupuesto disponible para arrojarle opciones de PC a su medida.
function armadoPc() {
    let opciones = prompt("Usted seleccionó armado de PC, ingrese su presupuesto disponible y le arrojaremos opciones a su medida.");
    if (opciones > 14999 && opciones < 30000) {
        alert("Intel i3, Asus H310, 8gb RAM Kingston");
    } else if (opciones > 30000 && opciones < 50000) {
        alert("Intel i5, Asus B365, 16gb RAM Kingston");
    } else if (opciones > 50000) {
        alert("Intel i7, Asus Z390, 32gb RAM Kingston");
    } else {
        alert("Ingrese un monto entre $15.000 y $100.000");
    }
}
let armado = document.getElementById("armado");
armado.onclick = () => armadoPc();




//En esta sección solicito nombre y celular para comunicarme con el cliente.
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    alert(`Hola ${inputs[0].value}, en breve me estaré comunicando con usted.`);
})





//Calcula, según la cantidad elegida, el precio total de los productos.
function calcular() {
    let cantidad = document.getElementsByClassName('cantidad');
    let precio = 1500;
    let total = document.getElementsByClassName('total');

    for (let c = 0; c < cantidad.length; c++) {
        total[c].value = cantidad[c].value * precio;
    }
}
let calculo = document.getElementById("calculo");
calculo.onclick = () => calcular();




//Array de objetos y método find.
//Servicios disponibles: con esta función le pedimos al cliente que seleccione por número de id el servicio a solicitar, le indicamos el precio final y le decimos que proceda con la forma de pago.
function service() {
    const servicios = [
        { id: 1, nombre: "reparación", precio: 2000 },
        { id: 2, nombre: "armado de PC", precio: 4000 },
        { id: 3, nombre: "limpieza", precio: 1500 },
        { id: 4, nombre: "formateo", precio: 1000 },
    ];

    let id = parseInt(prompt("Ingrese el número de ID del servicio a solicitar:"));
    let encontrado = servicios.find(producto => producto.id === id);

    if (encontrado) {
        let mensaje = `Usted seleccionó ${encontrado.nombre} y tiene un costo de $${encontrado.precio} \nPara confirmar proceda eligiendo Forma de pago.`;
        alert(mensaje);
    } else {
        alert("Servicio no encontrado");
    }
}
let seleccionar = document.getElementById("seleccionar");
seleccionar.onclick = () => service();



//Acá le damos 3 opciones de pago.
function pago() {
    let forma = prompt("Seleccione su método de pago:\n 1) MercadoPago \n 2) PayPal \n 3) Efectivo");

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
let pago1 = document.getElementById("pago1");
pago1.onclick = () => pago();