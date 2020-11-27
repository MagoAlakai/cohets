//Variables globales

let cohete: Cohete;
let propulsorCreado: Propulsor;
let text:any;
let cohetes: Array<Cohete> = new Array;
let coheteID:string;
let index:number;

//Creación de funciones necesarias para crear y mostrar cohete

//Mostrar el form de cohetes
let showCreateCohete = () =>{
    let showCreateCohete = (<HTMLDivElement>document.getElementById('showCreateCohete'));
    showCreateCohete.classList.add('d-none');
    myForm.classList.remove('d-none');
}

//Crear cohetes y propulsores
let createCohete = (id:any) =>{
    cohete = new Cohete(id);
    cohetes.push(cohete);
    let i:number = cohetes.indexOf(cohete);
    let showCohetesDesplegados:HTMLDivElement = (<HTMLDivElement>document.getElementById('dropdown-menu'));
    text = `<p class="dropdown-item border" onclick="muestraBotones(event)">Cohete ${i + 1}: ${cohete.getId()}</p>`;
    showCohetesDesplegados.appendChild(createDropdown(text));
    let showCreateCohete = (<HTMLDivElement>document.getElementById('showCreateCohete'));
    showCreateCohete.classList.remove('d-none');
    myForm.classList.add('d-none');
}

let createPotencia = (id:any, num_propulsores:number) =>{
    let i: number;
    let p: number;
    text = `${id}: `;
    for(p = 0; p < cohetes.length; p++){
        if(cohetes[p].getId() === id){
            for(i = 1; i <= num_propulsores; i++){
                let potencia:any = prompt(`Introduce potencia del propulsor ${i}`);
                let propulsorCreado = new Propulsor(parseInt(potencia));
                cohetes[p].createPropulsor(propulsorCreado);
                if(i === num_propulsores){
                    text += potencia + '.';
                }else{
                    text += potencia + ', ';
                }
            }
        }
    }
    cohete.calcularPotenciaMax();
}

//Comportamiento de los cohetes
let acelerarCohete = ()=>{
    let i:number = 0;
    let boleano:boolean = false;
    while(!boleano && i < cohetes.length){
        if(coheteID === cohetes[i].getId()){
            cohetes[i].acelerar();
            boleano = true;
        }else{
            i++;
        }
    }
}

let frenarCohete = ()=>{
    let i:number = 0;
    let boleano:boolean = false;
    while(!boleano && i < cohetes.length){
        if(coheteID === cohetes[i].getId()){
            cohetes[i].frenar();
            boleano = true;
        }else{
            i++;
        }
    }
}

//Mostrar por pantalla 

let showCohete = ()=>{
    let i:number = 0;
    let boleano:boolean = false;
    let coheteProperties = (<HTMLDivElement>document.getElementById("col"));
    let show_cohete = (<HTMLDivElement>document.getElementById("show_cohete"));
    while(!boleano && i < cohetes.length){
        if(coheteID === cohetes[i].getId()){
            text = `${cohetes[i].getId()}: `;
            index = i + 1;
            boleano = true;
            if(show_cohete.className === "border container mt-5 pb-2 mb-5 invisible"){
                let p:number = 0;
                for(p ; p < cohetes[i].propulsores.length; p++){
                    if(p === cohetes[i].propulsores.length -1){
                        text += cohetes[i].propulsores[p].getPotencia() + '.';
                    }else{
                        text += cohetes[i].propulsores[p].getPotencia() + ', ';
                    }
                }
                show_cohete.classList.remove('invisible');
                (<HTMLElement>document.getElementById("coheteTitulo")).textContent = `Cohete ${i + 1} - Id y Propulsores: `;
                coheteProperties.appendChild(createList(text));
            }else{
                text = `La potencia actual es de ${cohetes[i].getPotenciaActual()}.`;
                coheteProperties.appendChild(createList(text));
            }
        }else{
            i++;
        }
    }
}

let createList = (text:string)=> {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

let createDropdown = (text:string)=> {
    let dropdown = document.createElement('div');
    dropdown.innerHTML = text;
    return dropdown;
}

let muestraBotones = (event:any)=> {
    let botonesVarios:HTMLElement = document.getElementById("botonesVarios") as HTMLElement;
    botonesVarios.classList.remove('invisible');
    let id_provisional:string = (<HTMLElement>event.target).innerHTML;
    coheteID = id_provisional.slice(10, 20);
    let coheteProperties = (<HTMLDivElement>document.getElementById("col"));
    let show_cohete = (<HTMLDivElement>document.getElementById("show_cohete"));
    show_cohete.classList.add('invisible');
    coheteProperties.textContent= '';
}


//CREACION VARIABLES Y ASIGNACION FORMULARIO

//Recogida de datos del formulario Cohete

let myForm = (<HTMLFormElement>document.getElementById('myFormId'));
let id:any = (<HTMLInputElement>document.getElementById('id_cohete'))
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
        createCohete(id.value.toUpperCase());
        let cohete_ID = cohete.getId();
        createPotencia(cohete_ID, parseInt(num_propulsores.value));
        id.value = '';
        num_propulsores.value = '';
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


