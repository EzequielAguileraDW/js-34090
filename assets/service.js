//Modo oscuro
const botonColor = document.querySelector("#color-mode");
const body = document.body;
let darkMode = localStorage.getItem("dark-mode");

function actDark() {
    body.classList.add("darkmode");
    localStorage.setItem("dark-mode", "activado");
}

function desDark() {
    body.classList.remove("darkmode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    actDark();
} else {
    desDark();
}

botonColor.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "activado") {
        desDark();
    } else {
        actDark();
    }
})






//Servicios disponibles, acá ultilicé sessionStorage/JSON, el sessionStorage fue por gusto, por eso no utilicé localStorage.
let servicios = [
    { id: 1, nombre: "Armado de PC", precio: 4000 },
    { id: 2, nombre: "Mantenimiento y limpieza", precio: 2500 },
    { id: 3, nombre: "Cambio de componentes", precio: 1000 },
    { id: 4, nombre: "Formateo", precio: 2000 },
];

const agregar = (id) => {
    let carritoStorage = JSON.parse(sessionStorage.getItem("carrito"));
    let objeto = servicios.find((item) => item.id === id);

    if (carritoStorage) {
        let nuevoCarrito = carritoStorage;
        nuevoCarrito.push(objeto);
        sessionStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    } else {
        let carrito = [objeto];

        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
};

servicios.forEach((item) => {
    //Div donde se muestran los servicios
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>Servicio: ${item.id}</h2>
        <p>${item.nombre}</p>
        <b>Precio: $${item.precio}</b>
        <button id="boton${item.id}">Agregar</button>
        <button id="supr${item.id}">Quitar</button><hr>
        `;

    document.body.append(div);

    //Boton para borrar el sessionStorage
    let suprimir = document.getElementById(`supr${item.id}`);
    suprimir.addEventListener("click", () => sessionStorage.clear());
    suprimir.addEventListener("click", () => {
        Toastify({
            text: "Servicio quitado!",
            duration: 3000,
            gravity: 'bottom',
            style: {
                background: "red",
            }
        }).showToast();
    })

    //Agregar al sessionStorage y notificar que se agregó
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
    boton.addEventListener("click", () => {
        Toastify({
            text: "Servicio agregado!",
            duration: 3000,
            gravity: 'bottom',
        }).showToast();
    })
});






//Acá le damos 3 opciones de pago.
function pago() {
    (async () => {
        const { value: pago } = await Swal.fire({
            title: 'Seleccioná un método de pago',
            color: '#05001b',
            input: 'select',
            inputOptions: {
                MercadoPago: 'Mercado Pago',
                Efectivo: 'Efectivo',
                Paypal: 'PayPal'
            },
            inputPlaceholder: 'Seleccioná',
            showCancelButton: true,
            confirmButtonColor: '#1987b3',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'MercadoPago') {
                        resolve();
                    } else if (value === 'Efectivo'){
                        resolve();
                    } else if (value === 'Paypal'){
                        resolve();
                    } else {
                        resolve('Necesitas seleccionar un método :)');
                    }
                })
            }
        })

        if (pago === 'MercadoPago') {
            Swal.fire({
                title:`Seleccionaste: ${pago}`,
                text:'CVU: xxxxxxxxx',
                confirmButtonColor: '#1987b3'
            });
        } else if (pago === 'Efectivo') {
            Swal.fire({
                title:`Seleccionaste: ${pago}`,
                confirmButtonColor: '#1987b3'
            });
        } else if (pago === 'Paypal'){
            Swal.fire({
                title:`Seleccionaste: ${pago}`,
                text: 'Solicitar boleta por mail: ezequiel@gmail.com',
                confirmButtonColor: '#1987b3'
            });
        }
    })()
}
let pago1 = document.getElementById("pago1");
pago1.onclick = () => pago();


