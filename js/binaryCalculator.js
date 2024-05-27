let flag = ""


function getNumberZero() {
    document.getElementById('enter').value += "0";       
}

function getNumberOne() {
    document.getElementById('enter').value += "1";       
}

function clearInput() {
    document.getElementById('enter').value = "";       
}

function btnSum() {
    document.getElementById('enter').value += "+";       
    flag = "+";
}

function btnSub() {
    document.getElementById('enter').value += "-";
    flag = "-";   
}

function btnMul() {
    document.getElementById('enter').value += "×";  
    flag = "×";    
}

function btnDiv() {
    document.getElementById('enter').value += "÷";
    flag = "÷";
}


function isValid(){
    const regex = /^(0|1)+(\+|\-|\×|\÷){1}(0|1)+$/g;
    
    const getResul = document.getElementById('enter').value;

    const binaryOperation = getResul.match(regex)
    
    if(binaryOperation !== null){
        result();
        operation(flag,binaryOperation[0])
    }else{
        alert("Expresión malformada")
    }
}


function result(){
    const getResul = document.getElementById('enter').value;
    document.getElementById('resul').value = getResul + ' =';  
}

function operation(flag, str){
    let arrB = str.split(flag);
    let dec1 = parseInt(arrB[0], 2);
    let dec2 = parseInt(arrB[1], 2);
    let resulDec = 0;
    let resulBin = 0;
    
    switch(flag){
        case "+":
            resulDec = dec1 + dec2;
            
            break;

        case "-":
            resulDec = dec1 - dec2;
        
            break;

        case "×":
            resulDec = dec1 * dec2;
        
            break;

        case "÷":    
            resulDec = dec1 / dec2;
            
            break;
    }
    
    resulBin = decimalToBinary(resulDec);   


    document.getElementById('enter').value = resulBin;
}

function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}