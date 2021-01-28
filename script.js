// var card = document.getElementById("#cardInput");
// var cvc = document.getElementById("#cvcInput");
// var amount = document.getElementById("#amountInput");
// var name = document.getElementById("#nameInput");
// var lastName = document.getElementById("#lastNameInput");
// var city = document.getElementById("#cityInput");


// function validateForm() {
//     if (validate(card) && validate(cvc)) {
//         alert("ok");
//     } else {
//         alert("no");
//     }
// }

// function validate(input) {
//     if (input.value != "") {
//         return true;
//     } else {
//        return false;
//     }
// }

let card = document.getElementById("#cardInput");
let cvc = document.getElementById("#cvcInput");
let amount = document.getElementById("#amountInput");
let name = document.getElementById("#nameInput");
let lastName = document.getElementById("#lastNameInput");
let city = document.getElementById("#cityInput");
let list = document.querySelector("input[type=radio]");

// function ValidateList(myInput) {
//     if (myInput.value != "") {
//         return true;
//     } else {
//         return false;
//     }
// }

function ValidateInputs(myInput) {
    if (myInput.value != "") {
        return true;
    } else {
        return false;
    }
}

function validateFields() {
    if ((ValidateInputs(card) == true) && ValidateInputs(cvc) == true && ValidateInputs(amount) == true 
    && ValidateInputs(name) == true && ValidateInputs(lastName) == true && ValidateInputs(city) == true) {
        alert("Se ha llenado correctamente");
    } else {
        alert("Faltan espacios por rellenar");
    }
}
