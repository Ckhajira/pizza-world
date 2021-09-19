function getSize() {
    let getSize = document.getElementById('getsize').value;
    return parseInt(getSize)
}

function getCrust() {
    let getCrust = document.getElementById('getcrust').value;
    return parseInt(getCrust)
}

function getPep() {
    let Pep = 0;
    let pep = document.getElementById('defaultInline1');
    if (pep.checked === true) {
        Pep = 200;
    }
    return parseInt(Pep)
}

function getOnion() {
    var Onion = 0;
    var onion = document.getElementById("defaultInline2");
    if (onion.checked === true) {
        Onion = 200;

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
        Pepper = 200;

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