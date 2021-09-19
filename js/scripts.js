function getSize(){
    let getSize = document.getElementById('getsize').value;
    return parseInt(getSize)
}

function getCrust(){
    let getCrust = document.getElementById('getcrust').value;
    return parseInt(getCrust)
}

function getPep(){
    let Pep = 0;
    let pep = document.getElementById('defaultInline1');
    if (pep.checked=true){
        Pep = 200;
    }
    return parseInt(Pep)
}