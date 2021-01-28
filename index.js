var card = document.getElementById("cardInput");
var cvc = document.getElementById("cvcInput");
var amount = document.getElementById("amountInput");
var name = document.getElementById("nameInput");
var lastName = document.getElementById("lastNameInput");
var city = document.getElementById("cityInput");
var aproveLabel = document.getElementById("aproveFieldCard");

function validateForm(inputToValidate) {
    if (inputToValidate.value != "") {
        return true;
    } else {
        return false;
    }
}

function validateFields() {
    if (validateForm(card) == true
        && validateForm(cvc) == true
        && validateForm(amount) == true
        && validateForm(name) == true
        && validateForm(lastName) == true
        && validateForm(city) == true) {
        alert("Se ha llenado correctamente");
        //  aproveLabel.style.display = "inline-block";

    } else {
        alert("Faltan espacios por rellenar");
    }
}
