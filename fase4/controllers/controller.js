var cohete1;
var cohete2;
var propulsorCreado;
var text;
//Creación de funciones necesarias para crear y mostrar cohete
function createCohete1(id) {
    cohete1 = new Cohete(id);
    return cohete1;
}
function createCohete2(id) {
    cohete2 = new Cohete(id);
    return cohete2;
}
var createPotencia1 = function (text, id, propulsores) {
    var i;
    var num_prop = parseInt(propulsores);
    text = id + ": ";
    for (i = 1; i <= num_prop; i++) {
        var potencia = prompt("Introduce potencia del propulsor " + i);
        var propulsorCreado_1 = new Propulsor(parseInt(potencia));
        cohete1.createPropulsor(propulsorCreado_1);
        if (i === num_prop) {
            text += potencia + '.';
        }
        else {
            text += potencia + ', ';
        }
    }
    cohete1.calcularPotenciaMax();
    //showCohete1(text);
};
var createPotencia2 = function (text, id, propulsores) {
    var i;
    var num_prop = parseInt(propulsores);
    for (i = 1; i <= num_prop; i++) {
        var potencia = prompt("Introduce potencia del propulsor " + i);
        var propulsorCreado_2 = new Propulsor(parseInt(potencia));
        cohete2.createPropulsor(propulsorCreado_2);
    }
    cohete2.calcularPotenciaMax();
    //showCohete2(text);
};
var acelerarCohete1 = function () {
    cohete1.acelerar();
};
var acelerarCohete2 = function () {
    cohete2.acelerar();
};
var frenarCohete1 = function () {
    cohete1.frenar();
};
var frenarCohete2 = function () {
    cohete2.frenar();
};
var showCohete1 = function () {
    var coheteProperties = document.getElementById("col");
    var i = 0;
    var show_cohete = document.getElementById("show_cohete");
    text = cohete1.getId().toUpperCase() + ": ";
    if (show_cohete.className === "border container invisible mt-4 pb-2 mb-5") {
        for (i; i < cohete1.propulsores.length; i++) {
            if (i === cohete1.propulsores.length - 1) {
                text += cohete1.propulsores[i].getPotencia() + '.';
            }
            else {
                text += cohete1.propulsores[i].getPotencia() + ', ';
            }
        }
        show_cohete.classList.remove('invisible');
        coheteProperties.appendChild(createList(text));
    }
    else {
        text = "La potencia actual es de " + cohete1.getPotenciaActual() + ": ";
        coheteProperties.appendChild(createList(text));
    }
};
var showCohete2 = function () {
    var coheteProperties = document.getElementById("col2");
    var show_cohete2 = document.getElementById("show_cohete2");
    var i = 0;
    text = cohete1.getId().toUpperCase() + ": ";
    if (show_cohete2.className === "border container invisible mt-4 pb-2 mb-5") {
        for (i; i < cohete2.propulsores.length; i++) {
            if (i === cohete2.propulsores.length - 1) {
                text += cohete2.propulsores[i].getPotencia() + '.';
            }
            else {
                text += cohete2.propulsores[i].getPotencia() + ', ';
            }
        }
        show_cohete2.classList.remove('invisible');
        coheteProperties.appendChild(createList(text));
    }
    else {
        text = "La potencia actual es de " + cohete2.getPotenciaActual() + ": ";
        coheteProperties.appendChild(createList(text));
    }
};
var showCohetes = function () {
    showCohete1();
    showCohete2();
};
var createList = function (text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
};
//CREACION VARIABLES Y ASIGNACION
//Recogida de datos del formulario Cohete
var myForm = document.getElementById('myFormId');
var id = document.getElementById('id_cohete');
var num_propulsores = document.getElementById('num_propulsores');
//ONSUBMIT DE FORM COHETE Y CONTROL
myForm.onsubmit = function (event) {
    var acumErrores = 0;
    if (id.value.length !== 9) {
        id.classList.add('is-invalid');
        document.getElementById("errorId_cohete").textContent = "El Id debe ser de 9 caracteres";
        acumErrores++;
    }
    if (num_propulsores.value == "") {
        num_propulsores.classList.add('is-invalid');
        document.getElementById("errorNum_propulsores").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    //Crear cohete y mostrar en DOM
    if (acumErrores === 0) {
        id.classList.remove('is-invalid');
        num_propulsores.classList.remove('is-invalid');
        createCohete1(id.value);
        var cohete_ID = cohete1.getId().toUpperCase();
        createPotencia1(text, cohete_ID, num_propulsores.value);
        id.value = '';
        num_propulsores.value = '';
        myForm.classList.add('d-none');
        myForm2.classList.remove('invisible');
    }
    event.preventDefault();
};
//EVENT LISTENER COHETE
var verifyCohete = function (event) {
    if (event.target.value.length !== 9 && event.target.value === id.value) {
        id.classList.add('is-invalid');
        document.getElementById("errorId_cohete").textContent = "El Id debe ser de 9 caracteres";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
    if (event.target.value === '' && event.target.value === num_propulsores.value) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorNum_propulsores").textContent = "Este campo es obligatorio";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
};
myForm.addEventListener('blur', verifyCohete, true);
//COHETE 2
//CREACION VARIABLES Y ASIGNACION
//Recogida de datos del formulario Cohete
var myForm2 = document.getElementById('myFormId2');
var id2 = document.getElementById('id_cohete2');
var num_propulsores2 = document.getElementById('num_propulsores2');
//ONSUBMIT DE FORM COHETE 2 Y CONTROL
myForm2.onsubmit = function (event) {
    var acumErrores = 0;
    if (id2.value.length !== 9) {
        id2.classList.add('is-invalid');
        document.getElementById("errorId_cohete2").textContent = "El Id debe ser de 9 caracteres";
        acumErrores++;
    }
    if (num_propulsores2.value == "") {
        num_propulsores2.classList.add('is-invalid');
        document.getElementById("errorNum_propulsores2").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    //Crear cohete 2 y mostrar en DOM
    if (acumErrores === 0) {
        id2.classList.remove('is-invalid');
        num_propulsores2.classList.remove('is-invalid');
        createCohete2(id2.value);
    }
    if (acumErrores === 0) {
        var cohete_ID2 = cohete2.getId().toUpperCase();
        createPotencia2(text, cohete_ID2, num_propulsores2.value);
        id2.value = '';
        num_propulsores2.value = '';
        myForm2.classList.add('d-none');
        var showBotones = document.getElementById("botonesvarios");
        showBotones.classList.remove('invisible');
    }
    event.preventDefault();
};
//EVENT LISTENER COHETE 2
var verifyCohete2 = function (event) {
    if (event.target.value.length !== 9 && event.target.value === id2.value) {
        id2.classList.add('is-invalid');
        document.getElementById("errorId_cohete2").textContent = "El Id debe ser de 9 caracteres";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
    if (event.target.value === '' && event.target.value === num_propulsores2.value) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorNum_propulsores2").textContent = "Este campo es obligatorio";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
};
myForm2.addEventListener('blur', verifyCohete2, true);
