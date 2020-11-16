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
//EVENT LISTENER CAR
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
/*//WHEELS

//Declaración de funciones

let showWheel = (text: string)=>{
    let wheelProperties: any = document.getElementById("col");
    wheelProperties.appendChild(createLi(text));
}

let createLi = (text:string)=> {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

//ONSUBMIT DE FORM WHEEL Y CONTROL

var acumErrores = 0;
myFormWheel.onsubmit = (event) => {

    for(let i = 1; i <= 4; i++){
        let wheel_brand: HTMLInputElement = (document.getElementById('wheel' + i +'_brand') as HTMLInputElement);
        let wheel_diameter: HTMLInputElement = (document.getElementById('wheel' + i + '_diameter') as HTMLInputElement);

    //Control entrada datos ruedas

        if(wheel_brand.value == "") {
            wheel_brand.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_brand")).textContent = "Este campo es obligatorio";
            acumErrores ++;
        }else{
            acumErrores === 0;
        }
    
        if(wheel_diameter.value == "") {
            wheel_diameter.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = "Este campo es obligatorio";
            acumErrores ++;
        }else if(!(parseFloat(wheel_diameter.value) > 0.4 && parseFloat(wheel_diameter.value) < 2)){
            wheel_diameter.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = 'El diámetro de la rueda ' + i +' no es correcto';
            acumErrores ++;
        }else{
            acumErrores === 0;
        }

        if(acumErrores === 0){
            let wheel = new Wheel(wheel_brand.value, parseFloat(wheel_diameter.value));
            car.addWheel(wheel);
        }
    }

    //Mostrar wheels por pantalla

    if(acumErrores === 0){
        let show_wheels = (<HTMLDivElement>document.getElementById("show_wheels"));
        show_wheels.classList.remove('invisible');
        for(let i = 0; i < car.wheels.length; i++){
            let wheel_brand: HTMLInputElement = (document.getElementById('wheel' + (i + 1)  +'_brand') as HTMLInputElement);
            let wheel_diameter: HTMLInputElement = (document.getElementById('wheel' + (i + 1) + '_diameter') as HTMLInputElement);
            let text = `Wheel ${i + 1} = Brand: ${car.wheels[i].brand} & Diameter: ${car.wheels[i].diameter} `;
            showWheel(text);
            //Limpiar Inputs
            wheel_brand.value = "";
            wheel_diameter.value = "";
            event.preventDefault();
        }
    }
    
    event.preventDefault();
}

//EVENT LISTENER WHEELS

let verifyWheel = (event:any)=>{
    for(let i = 1; i <= 4; i++){
        let wheel_brand: HTMLInputElement = (document.getElementById('wheel' + i +'_brand') as HTMLInputElement);
        let wheel_diameter: HTMLInputElement = (document.getElementById('wheel' + i + '_diameter') as HTMLInputElement);

        if((<HTMLInputElement>event.target).value ==='') {
            (<HTMLElement>event.target).classList.add('is-invalid');
            if((<HTMLInputElement>event.target).value === wheel_brand.value){
                (<HTMLElement>document.getElementById("errorWheel" + i +"_brand")).textContent = "Este campo es obligatorio";
            }else if((<HTMLInputElement>event.target).value === wheel_diameter.value){
                (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = "Este campo es obligatorio";
            }
        }else if(parseFloat((<HTMLInputElement>event.target).value) < 0.4 || parseFloat((<HTMLInputElement>event.target).value) >= 2){
            (<HTMLElement>event.target).classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = 'El diámetro de la rueda ' + i +' no es correcto';
        }else{
            (<HTMLElement>event.target).classList.remove('is-invalid');
            acumErrores = 0;
        }
    }
}

myFormWheel.addEventListener('blur', verifyWheel, true);*/
