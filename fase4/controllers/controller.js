var cohete;
var propulsorCreado;
var text;
var cohetes = new Array;
var coheteID;
//Creación de funciones necesarias para crear y mostrar cohete
var showCreateCohete = function () {
    var showCreateCohete = document.getElementById('showCreateCohete');
    showCreateCohete.classList.add('d-none');
    myForm.classList.remove('d-none');
};
var createCohete = function (id) {
    cohete = new Cohete(id);
    cohetes.push(cohete);
    var i = cohetes.indexOf(cohete);
    var showCohetesDesplegados = document.getElementById('dropdown-menu');
    text = "<p class=\"dropdown-item border\" onclick=\"muestraBotones(event)\">Cohete " + (i + 1) + ": " + cohete.getId() + "</p>";
    showCohetesDesplegados.appendChild(createDropdown(text));
    var showCreateCohete = document.getElementById('showCreateCohete');
    showCreateCohete.classList.remove('d-none');
    myForm.classList.add('d-none');
};
var createPotencia = function (id, num_propulsores) {
    var i;
    var p;
    text = id + ": ";
    for (p = 0; p < cohetes.length; p++) {
        if (cohetes[p].getId() === id) {
            for (i = 1; i <= num_propulsores; i++) {
                var potencia = prompt("Introduce potencia del propulsor " + i);
                var propulsorCreado_1 = new Propulsor(parseInt(potencia));
                cohetes[p].createPropulsor(propulsorCreado_1);
                if (i === num_propulsores) {
                    text += potencia + '.';
                }
                else {
                    text += potencia + ', ';
                }
            }
        }
    }
    cohete.calcularPotenciaMax();
};
var acelerarCohete = function () {
    var i = 0;
    var boleano = false;
    while (!boleano && i < cohetes.length) {
        if (coheteID === cohetes[i].getId()) {
            cohetes[i].acelerar();
            boleano = true;
        }
        else {
            i++;
        }
    }
};
var frenarCohete = function () {
    var i = 0;
    var boleano = false;
    while (!boleano && i < cohetes.length) {
        if (coheteID === cohetes[i].getId()) {
            cohetes[i].frenar();
            boleano = true;
        }
        else {
            i++;
        }
    }
};
var showCohete = function () {
    var i = 0;
    var boleano = false;
    var coheteProperties = document.getElementById("col");
    var show_cohete = document.getElementById("show_cohete");
    while (!boleano && i < cohetes.length) {
        if (coheteID === cohetes[i].getId()) {
            text = cohetes[i].getId() + ": ";
            boleano = true;
            if (show_cohete.className === "border container mt-4 pb-2 mb-5 invisible") {
                var p = 0;
                for (p; p < cohetes[i].propulsores.length; p++) {
                    if (p === cohetes[i].propulsores.length - 1) {
                        text += cohetes[i].propulsores[p].getPotencia() + '.';
                    }
                    else {
                        text += cohetes[i].propulsores[p].getPotencia() + ', ';
                    }
                }
                show_cohete.classList.remove('invisible');
                coheteProperties.appendChild(createList(text));
            }
            else {
                text = "La potencia actual es de " + cohetes[i].getPotenciaActual() + ": ";
                coheteProperties.appendChild(createList(text));
            }
        }
        else {
            i++;
        }
    }
};
var createList = function (text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
};
var createDropdown = function (text) {
    var dropdown = document.createElement('div');
    dropdown.innerHTML = text;
    return dropdown;
};
var muestraBotones = function (event) {
    var botonesVarios = document.getElementById("botonesVarios");
    botonesVarios.classList.remove('invisible');
    var id_provisional = event.target.innerHTML;
    coheteID = id_provisional.slice(10, 20);
    var coheteProperties = document.getElementById("col");
    var show_cohete = document.getElementById("show_cohete");
    show_cohete.classList.add('invisible');
    coheteProperties.textContent = '';
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
        createCohete(id.value.toUpperCase());
        var cohete_ID = cohete.getId();
        createPotencia(cohete_ID, parseInt(num_propulsores.value));
        id.value = '';
        num_propulsores.value = '';
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
/*let myForm2 = (<HTMLFormElement>document.getElementById('myFormId2'));
let id2: HTMLInputElement = (document.getElementById('id_cohete2') as HTMLInputElement);
let num_propulsores2: HTMLInputElement = (document.getElementById('num_propulsores2') as HTMLInputElement);


//ONSUBMIT DE FORM COHETE 2 Y CONTROL
myForm2.onsubmit = (event) => {
    let acumErrores = 0;

    if(id2.value.length !== 9){
        id2.classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorId_cohete2")).textContent = "El Id debe ser de 9 caracteres";
        acumErrores ++;
    }

    if(num_propulsores2.value == "") {
        num_propulsores2.classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorNum_propulsores2")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

//Crear cohete 2 y mostrar en DOM
    if (acumErrores === 0){
        id2.classList.remove('is-invalid');
        num_propulsores2.classList.remove('is-invalid');
        createCohete2(id2.value);
    }

    if(acumErrores === 0){
        let cohete_ID2 = cohete2.getId().toUpperCase();
        createPotencia2(text, cohete_ID2, num_propulsores2.value);
        id2.value = '';
        num_propulsores2.value = '';
        myForm2.classList.add('d-none');
        let showBotones: HTMLDivElement = document.getElementById("botonesvarios") as HTMLDivElement;
        showBotones.classList.remove('invisible');
    }

event.preventDefault()
}

//EVENT LISTENER COHETE 2

let verifyCohete2 = (event:any)=>{

    if((<HTMLInputElement>event.target).value.length !== 9 && (<HTMLInputElement>event.target).value === id2.value) {
        id2.classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorId_cohete2")).textContent = "El Id debe ser de 9 caracteres";
    }else{
        (<HTMLElement>event.target).classList.remove('is-invalid');
    }

    if((<HTMLInputElement>event.target).value ==='' &&  (<HTMLInputElement>event.target).value === num_propulsores2.value){
        (<HTMLElement>event.target).classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorNum_propulsores2")).textContent = "Este campo es obligatorio";
    }else{
        (<HTMLElement>event.target).classList.remove('is-invalid');
    }
}

myForm2.addEventListener('blur', verifyCohete2, true);*/
