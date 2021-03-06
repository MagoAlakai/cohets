var cohete;
//Creación de funciones necesarias para crear y mostrar cohete
function createCohete(id) {
    cohete = new Cohete(id);
    console.log(cohete);
    return cohete;
}
var showCohete = function (text) {
    var coheteProperties = document.getElementById("col");
    coheteProperties.appendChild(createList(text));
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
    if (acumErrores === 0) {
        id.classList.remove('is-invalid');
        num_propulsores.classList.remove('is-invalid');
    }
    //Crear cohete y mostrar en DOM
    createCohete(id.value);
    if (acumErrores === 0) {
        var show_cohete = document.getElementById("show_cohete");
        show_cohete.classList.remove('invisible');
        var cohete_ID = cohete.id.toUpperCase();
        var text = "El Cohete " + cohete_ID + " tiene " + num_propulsores.value + " propulsores.";
        showCohete(text);
        id.value = '';
        num_propulsores.value = '';
    }
    event.preventDefault();
};
//EVENT LISTENER COHETE
var verifyCohete = function (event) {
    if (event.target.value.length !== 9 && event.target.value === id.value) {
        event.target.classList.add('is-invalid');
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
