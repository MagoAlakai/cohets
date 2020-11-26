let cohete: Cohete;

//Creación de funciones necesarias para crear y mostrar cohete
function createCohete(id:string){
    cohete = new Cohete(id);
    console.log(cohete);
    return cohete;
}

let showCohete = (text: string)=>{
    let coheteProperties: any = document.getElementById("col");
    coheteProperties.appendChild(createList(text));
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
        createCohete(id.value);
	}

    if(acumErrores === 0){
        let show_cohete: HTMLDivElement = document.getElementById("show_cohete") as HTMLDivElement;
        show_cohete.classList.remove('invisible');
        let cohete_ID = cohete.getId().toUpperCase();
        let text = `El Cohete ${cohete_ID} tiene ${num_propulsores.value} propulsores.`;
        showCohete(text);
        id.value = '';
        num_propulsores.value = '';
    }

event.preventDefault()
}

//EVENT LISTENER COHETE

let verifyCohete = (event:any)=>{

    if((<HTMLInputElement>event.target).value.length !== 9 && (<HTMLInputElement>event.target).value === id.value) {
        (<HTMLElement>event.target).classList.add('is-invalid');
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

