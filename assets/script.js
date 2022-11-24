//Con esta función le solicitamos al cliente que ingrese su presupuesto disponible para arrojarle opciones de PC a su medida.
function armadoPc() {
    let opciones = prompt("Usted seleccionó armado de PC, ingrese su presupuesto disponible y le arrojaremos opciones a su medida.");

    if (opciones > 14999 && opciones < 30000) {
        //alert("Intel i3, Asus H310, 8gb RAM Kingston");
        let div = document.createElement("div");
        div.setAttribute('id', 'eliminar-dato');
        div.innerHTML = `
        <h4>Su presupuesto se ajusta a:</h4>
        <p>- Intel i3, Asus H310, 8gb RAM Kingston</p><button id="suprimirdato">X</button>`;
        document.body.append(div);
    } else if (opciones > 30000 && opciones < 50000) {
        //alert("Intel i5, Asus B365, 16gb RAM Kingston");
        let div2 = document.createElement("div");
        div2.setAttribute('id', 'eliminar-dato');
        div2.innerHTML = `
        <h4>Su presupuesto se ajusta a:</h4>
        <p>- Intel i5, Asus B365, 16gb RAM Kingston</p><button id="suprimirdato">X</button>`;
        document.body.append(div2);
    } else if (opciones >= 50000) {
        //alert("Intel i7, Asus Z390, 32gb RAM Kingston");
        let div3 = document.createElement("div");
        div3.setAttribute('id', 'eliminar-dato');
        div3.innerHTML = `
        <h4>Su presupuesto se ajusta a:</h4>
        <p>- Intel i7, Asus Z390, 32gb RAM Kingston</p><button id="suprimirdato">X</button>
        `;
        document.body.append(div3);
    } else {
        Swal.fire({
            title: 'Ingrese un monto entre $15.000 y $100.000',
            icon: 'error',
            confirmButtonColor: 'red'
        })
    }

    function borrar(){
        document.getElementById('eliminar-dato').innerHTML = "";
    }
    let borrado = document.getElementById('suprimirdato');
    borrado.onclick = () => borrar();
    
}
let armado = document.getElementById("armado");
armado.onclick = () => armadoPc();




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




//En esta sección solicito nombre y celular para comunicarme con el cliente.
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;

    Swal.fire({
        title: `Hola ${inputs[0].value}!`,
        text: 'En breve me estaré comunicando con vos!',
        icon: 'success',
        iconColor: '#1987b3',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
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