function getSize() {
    let getSize = document.getElementById('getsize').value;
    return parseInt(getSize)

}

function getCrust() {
    let getCrust = document.getElementById('getcrust').value;
    return parseInt(getCrust)
}

function getNumber() {
    var getNumber = document.getElementById("getnumber").value;
    return parseInt(getNumber);
}

function getPep() {
    let Pep = 0;
    let pep = document.getElementById('defaultInline1');
    if (pep.checked === true) {
        Pep = 400;
    }
    return parseInt(Pep)
}

function getOnion() {
    var Onion = 0;
    var onion = document.getElementById("defaultInline2");
    if (onion.checked === true) {
        Onion = 300;

    }
    return parseInt(Onion);
}

function getSpinach() {
    var Spinach = 0;
    var spinach = document.getElementById("defaultInline3");
    if (spinach.checked === true) {
        Spinach = 200;

    }
    return parseInt(Spinach);
}

function getPepper() {
    var Pepper = 0;
    var pepper = document.getElementById("defaultInline4");
    if (pepper.checked === true) {
        Pepper = 100;

    }
    return parseInt(Pepper);
}

function getBacon() {
    var Bacon = 0;
    var bacon = document.getElementById("defaultInline5");
    if (bacon.checked === true) {
        Bacon = 200;

    }
    return parseInt(Bacon);
}

function getSausage() {
    var Sausage = 0;
    var sausage = document.getElementById("defaultInline6");
    if (sausage.checked === true) {
        Sausage = 200;

    }
    return parseInt(Sausage);
}

function doCalculation() {
    var calculate = (getSize() + getCrust() + getPep() + getOnion() + getSpinach() + getPepper() + getBacon() + getSausage()) * getNumber();
    document.getElementById("appear").innerHTML = "Hi,you want " + getNumber() + " pizzas" + " It will cost " + (calculate);
}

function addTotal() {
    let add = (getSize() + getCrust() + getPep() + getOnion() + getSpinach() + getPepper() + getBacon() + getSausage()) * getNumber() + 200;

    alert("Hello, your total cost is" + add + ". It will be delivered at your place of choice. Thank you for choosing Pizza World.");

}
$(document).ready(function () {
    $("#deliver").click(function () {
        prompt("Where do you want your pizza delivered");
    });
})