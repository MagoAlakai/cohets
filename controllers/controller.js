var car;
//CAR
//Creación de funciones necesarias para crear, controlar y mostra car
function validar_matricula(plate) {
    var regex = /^[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}
function createCar(plate, brand, color) {
    car = new Car(plate.value, brand.value, color.value);
    console.log(car);
    return car;
}
function showCar(car) {
    var carProperties = document.getElementsByClassName("col");
    var carArr = Array.prototype.slice.call(carProperties);
    for (var element in car) {
        for (var i = 0; i < carArr.length; i++) {
            if (element === 'plate' && i === 0) {
                carArr[i].innerHTML += car[element];
            }
            else if (element === 'brand' && i === 1) {
                carArr[i].innerHTML += car[element];
            }
            else if (element === 'color' && i === 2) {
                carArr[i].innerHTML += car[element];
            }
        }
    }
}
//CREACION VARIABLES Y ASIGNACION
//Recogida de datos del formulario Car
var myForm = document.getElementById('myFormId');
var plate = document.getElementById('plate');
var brand = document.getElementById('brand');
var color = document.getElementById('color');
//Creación variable formulario Wheel
var myFormWheel = document.getElementById('myFormIdWheel');
//ONSUBMIT DE FORM CAR Y CONTROL
myForm.onsubmit = function (event) {
    var acumErrores = 0;
    if (plate.value == "") {
        plate.classList.add('is-invalid');
        document.getElementById("errorPlate").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!validar_matricula(plate.value)) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "Esta matrícula no cumple el formato";
        acumErrores++;
    }
    if (brand.value == "") {
        brand.classList.add('is-invalid');
        document.getElementById("errorBrand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (color.value == "") {
        color.classList.add('is-invalid');
        document.getElementById("errorColor").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (acumErrores === 0) {
        plate.classList.remove('is-invalid');
        brand.classList.remove('is-invalid');
        color.classList.remove('is-invalid');
    }
    //Crear car y mostrar en DOM
    createCar(plate, brand, color);
    if (validar_matricula(plate.value) && brand.value !== '' && color.value !== '') {
        var show_car = document.getElementById("show_car");
        show_car.classList.remove('invisible');
        showCar(car);
        plate.value = "";
        brand.value = "";
        color.value = "";
        myFormWheel.classList.remove('invisible');
    }
    event.preventDefault();
};
//EVENT LISTENER CAR
var verifyCar = function (event) {
    if (event.target.value === '' && event.target.value === plate.value) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorPlate").textContent = "Este campo es obligatorio";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
    if (event.target.value === '' && event.target.value === brand.value) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorBrand").textContent = "Este campo es obligatorio";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
    if (event.target.value === '' && event.target.value === color.value) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorColor").textContent = "Este campo es obligatorio";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
    if (!validar_matricula(plate.value)) {
        event.target.classList.add('is-invalid');
        document.getElementById("errorPlate").textContent = "Esta matrícula no cumple el formato";
    }
    else {
        event.target.classList.remove('is-invalid');
    }
};
myForm.addEventListener('blur', verifyCar, true);
//WHEELS
//Declaración de funciones
var showWheel = function (text) {
    var wheelProperties = document.getElementById("col");
    wheelProperties.appendChild(createLi(text));
};
var createLi = function (text) {
    var li = document.createElement('li');
    li.textContent = text;
    return li;
};
//ONSUBMIT DE FORM WHEEL Y CONTROL
var acumErrores = 0;
myFormWheel.onsubmit = function (event) {
    for (var i = 1; i <= 4; i++) {
        var wheel_brand = document.getElementById('wheel' + i + '_brand');
        var wheel_diameter = document.getElementById('wheel' + i + '_diameter');
        //Control entrada datos ruedas
        if (wheel_brand.value == "") {
            wheel_brand.classList.add('is-invalid');
            document.getElementById("errorWheel" + i + "_brand").textContent = "Este campo es obligatorio";
            acumErrores++;
        }
        else {
            acumErrores === 0;
        }
        if (wheel_diameter.value == "") {
            wheel_diameter.classList.add('is-invalid');
            document.getElementById("errorWheel" + i + "_diameter").textContent = "Este campo es obligatorio";
            acumErrores++;
        }
        else if (!(parseFloat(wheel_diameter.value) > 0.4 && parseFloat(wheel_diameter.value) < 2)) {
            wheel_diameter.classList.add('is-invalid');
            document.getElementById("errorWheel" + i + "_diameter").textContent = 'El diámetro de la rueda ' + i + ' no es correcto';
            acumErrores++;
        }
        else {
            acumErrores === 0;
        }
        if (acumErrores === 0) {
            var wheel = new Wheel(wheel_brand.value, parseFloat(wheel_diameter.value));
            car.addWheel(wheel);
        }
    }
    //Mostrar wheels por pantalla
    if (acumErrores === 0) {
        var show_wheels = document.getElementById("show_wheels");
        show_wheels.classList.remove('invisible');
        for (var i = 0; i < car.wheels.length; i++) {
            var wheel_brand = document.getElementById('wheel' + (i + 1) + '_brand');
            var wheel_diameter = document.getElementById('wheel' + (i + 1) + '_diameter');
            var text = "Wheel " + (i + 1) + " = Brand: " + car.wheels[i].brand + " & Diameter: " + car.wheels[i].diameter + " ";
            showWheel(text);
            //Limpiar Inputs
            wheel_brand.value = "";
            wheel_diameter.value = "";
            event.preventDefault();
        }
    }
    event.preventDefault();
};
//EVENT LISTENER WHEELS
var verifyWheel = function (event) {
    for (var i = 1; i <= 4; i++) {
        var wheel_brand = document.getElementById('wheel' + i + '_brand');
        var wheel_diameter = document.getElementById('wheel' + i + '_diameter');
        if (event.target.value === '') {
            event.target.classList.add('is-invalid');
            if (event.target.value === wheel_brand.value) {
                document.getElementById("errorWheel" + i + "_brand").textContent = "Este campo es obligatorio";
            }
            else if (event.target.value === wheel_diameter.value) {
                document.getElementById("errorWheel" + i + "_diameter").textContent = "Este campo es obligatorio";
            }
        }
        else if (parseFloat(event.target.value) < 0.4 || parseFloat(event.target.value) >= 2) {
            event.target.classList.add('is-invalid');
            document.getElementById("errorWheel" + i + "_diameter").textContent = 'El diámetro de la rueda ' + i + ' no es correcto';
        }
        else {
            event.target.classList.remove('is-invalid');
            acumErrores = 0;
        }
    }
};
myFormWheel.addEventListener('blur', verifyWheel, true);
