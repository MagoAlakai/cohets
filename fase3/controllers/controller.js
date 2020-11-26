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
var showCohete1 = function (text) {
    var coheteProperties = document.getElementById("col");
    coheteProperties.appendChild(createList(text));
};
var showCohete2 = function (text) {
    var coheteProperties = document.getElementById("col2");
    coheteProperties.appendChild(createList(text));
};
var createList = function (text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
};
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
    showCohete1(text);
};
var createPotencia2 = function (text, id, propulsores) {
    var i;
    var num_prop = parseInt(propulsores);
    text = id + ": ";
    for (i = 1; i <= num_prop; i++) {
        var potencia = prompt("Introduce potencia del propulsor " + i);
        var propulsorCreado_2 = new Propulsor(parseInt(potencia));
        cohete2.createPropulsor(propulsorCreado_2);
        if (i == num_prop) {
            text += potencia + '.';
        }
        else {
            text += potencia + ', ';
        }
    }
    cohete2.calcularPotenciaMax();
    showCohete2(text);
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
    }
    if (acumErrores === 0) {
        var show_cohete = document.getElementById("show_cohete");
        show_cohete.classList.remove('invisible');
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
        var show_cohete2 = document.getElementById("show_cohete2");
        show_cohete2.classList.remove('invisible');
        var cohete_ID2 = cohete2.getId().toUpperCase();
        createPotencia2(text, cohete_ID2, num_propulsores2.value);
        id2.value = '';
        num_propulsores2.value = '';
        myForm2.classList.add('d-none');
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
