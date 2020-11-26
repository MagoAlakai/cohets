let cohete1: Cohete;
let cohete2: Cohete;
let propulsorCreado: Propulsor;
let text:any;

//Creación de funciones necesarias para crear y mostrar cohete
function createCohete1(id:any ){
    cohete1 = new Cohete(id);
    return cohete1;
}

function createCohete2(id:any ){
    cohete2 = new Cohete(id);
    return cohete2;
}


let createPotencia1 = (text: any, id:any, propulsores: any) =>{
    let i: number;
    let num_prop = parseInt(propulsores);
    text = `${id}: `;
    for(i = 1; i <= num_prop; i++){
        let potencia:any = prompt(`Introduce potencia del propulsor ${i}`);
        let propulsorCreado = new Propulsor(parseInt(potencia));
        cohete1.createPropulsor(propulsorCreado);
        if(i === num_prop){
            text += potencia + '.';
        }else{
            text += potencia + ', ';
        }
    }
    cohete1.calcularPotenciaMax();
    //showCohete1(text);
}

let createPotencia2 = (text: any, id:any, propulsores: any) =>{
    let i: number;
    let num_prop = parseInt(propulsores);
    for(i = 1; i <= num_prop; i++){
        let potencia:any = prompt(`Introduce potencia del propulsor ${i}`);
        let propulsorCreado = new Propulsor(parseInt(potencia));
        cohete2.createPropulsor(propulsorCreado);
    }

    cohete2.calcularPotenciaMax();
    //showCohete2(text);
}

let acelerarCohete1 = ()=>{
    cohete1.acelerar();
}

let acelerarCohete2 = ()=>{
    cohete2.acelerar();
}

let frenarCohete1 = ()=>{
    cohete1.frenar();
}

let frenarCohete2 = ()=>{
    cohete2.frenar();
}

let showCohete1 = ()=>{
    let coheteProperties: any = document.getElementById("col");
    let i:number = 0;
    let show_cohete: HTMLDivElement = document.getElementById("show_cohete") as HTMLDivElement;
    text = `${cohete1.getId().toUpperCase()}: `;

    if(show_cohete.className === "border container invisible mt-4 pb-2 mb-5"){
        for(i ; i < cohete1.propulsores.length; i++){
            if(i === cohete1.propulsores.length -1){
                text += cohete1.propulsores[i].getPotencia() + '.';
            }else{
                text += cohete1.propulsores[i].getPotencia() + ', ';
            }
        }
        show_cohete.classList.remove('invisible');
        coheteProperties.appendChild(createList(text));
    }else{
        text = `La potencia actual es de ${cohete1.getPotenciaActual()}: `;
        coheteProperties.appendChild(createList(text));
    }
}

let showCohete2 = ()=>{
    let coheteProperties: any = document.getElementById("col2");
    let show_cohete2: HTMLDivElement = document.getElementById("show_cohete2") as HTMLDivElement;
    let i:number = 0;
    text = `${cohete1.getId().toUpperCase()}: `;
    if(show_cohete2.className === "border container invisible mt-4 pb-2 mb-5"){
        for(i ; i < cohete2.propulsores.length; i++){
            if(i === cohete2.propulsores.length - 1){
                text += cohete2.propulsores[i].getPotencia() + '.';
            }else{
                text += cohete2.propulsores[i].getPotencia() + ', ';
            }
        }
        show_cohete2.classList.remove('invisible');
        coheteProperties.appendChild(createList(text));
    }else{
        text = `La potencia actual es de ${cohete2.getPotenciaActual()}: `;
        coheteProperties.appendChild(createList(text));
    }
}

let showCohetes = ()=>{
    showCohete1();
    showCohete2();
}

let createList = (text:string)=> {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

//CREACION VARIABLES Y ASIGNACION

//Recogida de datos del formulario Cohete

let myForm = (<HTMLFormElement>document.getElementById('myFormId'));
let id: HTMLInputElement = (document.getElementById('id_cohete') as HTMLInputElement);
let num_propulsores: HTMLInputElement = (document.getElementById('num_propulsores') as HTMLInputElement);


//ONSUBMIT DE FORM COHETE Y CONTROL
myForm.onsubmit = (event) => {
    let acumErrores = 0;

    if(id.value.length !== 9){
        id.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorId_cohete")).textContent = "El Id debe ser de 9 caracteres";
        acumErrores ++;
    }

    if(num_propulsores.value == "") {
        num_propulsores.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorNum_propulsores")).textContent = "Este campo es obligatorio";
		acumErrores ++;
    }

//Crear cohete y mostrar en DOM
    if (acumErrores === 0){
        id.classList.remove('is-invalid');
        num_propulsores.classList.remove('is-invalid');
        createCohete1(id.value);
        let cohete_ID = cohete1.getId().toUpperCase();
        createPotencia1(text, cohete_ID, num_propulsores.value);
        id.value = '';
        num_propulsores.value = '';
        myForm.classList.add('d-none');
        myForm2.classList.remove('invisible');
    }

event.preventDefault()
}

//EVENT LISTENER COHETE

let verifyCohete = (event:any)=>{

    if((<HTMLInputElement>event.target).value.length !== 9 && (<HTMLInputElement>event.target).value === id.value) {
        id.classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorId_cohete")).textContent = "El Id debe ser de 9 caracteres";
    }else{
        (<HTMLElement>event.target).classList.remove('is-invalid');
    }

    if((<HTMLInputElement>event.target).value ==='' &&  (<HTMLInputElement>event.target).value === num_propulsores.value){
        (<HTMLElement>event.target).classList.add('is-invalid');
        (<HTMLElement>document.getElementById("errorNum_propulsores")).textContent = "Este campo es obligatorio";
    }else{
        (<HTMLElement>event.target).classList.remove('is-invalid');
    }
}

myForm.addEventListener('blur', verifyCohete, true);

//COHETE 2

//CREACION VARIABLES Y ASIGNACION

//Recogida de datos del formulario Cohete

let myForm2 = (<HTMLFormElement>document.getElementById('myFormId2'));
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

myForm2.addEventListener('blur', verifyCohete2, true);

