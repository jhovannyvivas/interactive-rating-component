const evaluacion = document.getElementById("evaluacion_id");
const agradecimiento = document.getElementById("agradecimiento_id");
const numeroSeleccionado = document.getElementById("numeroSeleccionado_id");

const numero1 = document.getElementById("1");
const numero2 = document.getElementById("2");
const numero3 = document.getElementById("3");
const numero4 = document.getElementById("4");
const numero5 = document.getElementById("5");

function desSeleccionar(exepcion) {

    switch (exepcion) {
        case 1:
            numero2.classList['value'] = "";
            numero3.classList['value'] = "";
            numero4.classList['value'] = "";
            numero5.classList['value'] = "";
            break;
        case 2:
            numero1.classList['value'] = "";
            numero3.classList['value'] = "";
            numero4.classList['value'] = "";
            numero5.classList['value'] = "";            
            break;
        case 3:
            numero1.classList['value'] = "";
            numero2.classList['value'] = "";
            numero4.classList['value'] = "";
            numero5.classList['value'] = "";          
            break;
        case 4:
            numero1.classList['value'] = "";
            numero2.classList['value'] = "";
            numero3.classList['value'] = "";
            numero5.classList['value'] = "";            
            break;
        case 5:
            numero1.classList['value'] = "";
            numero2.classList['value'] = "";
            numero3.classList['value'] = "";
            numero4.classList['value'] = "";
            break;
    
        default:
            break;
    }
    
}

numero1.addEventListener('click', (_) => {
    desSeleccionar(1);
    numero1.classList['value'] = "click";
    numeroSeleccionado.innerText = "1";
    
});

numero2.addEventListener('click', (_) => {
    desSeleccionar(2);
    numero2.classList['value'] = "click";
    numeroSeleccionado.innerText = "2";
});

numero3.addEventListener('click', (_) => {
    desSeleccionar(3);

    numero3.classList['value'] = "click";
    numeroSeleccionado.innerText = "3";
});

numero4.addEventListener('click', (_) => {
    desSeleccionar(4);

    numero4.classList['value'] = "click";
    numeroSeleccionado.innerText = "4";
});

numero5.addEventListener('click', (_) => {
    desSeleccionar(5);

    numero5.classList['value'] = "click";
    numeroSeleccionado.innerText = "5";
});

function submit() {
    evaluacion.style.display = "none";
    agradecimiento.style.display = "grid";
}

