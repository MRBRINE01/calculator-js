let displayText = "";
let num1 = null;
let num2 = null;
let oprator = null;

const displayScreen = document.querySelector('.outputScreen .output');

function updateDisplay(value){
    displayText += value;
    displayScreen.textContent = displayText;
};

function clearDisplay(){
    displayText = "";
    num1 = null;
    num2 = null;
    operate = null;
    displayScreen.textContent = "0";
};

document.querySelectorAll('.board button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        console.log(value);

        
        if(value == "C" || value == "CE"){
            clearDisplay();
        }
        if(value == "delete"){
            deleteLastDigit();
        }
        if(value == "="){
            displayResult();
        }
        if(value == "+" || value == "-" || value == "x" || value == "/"){
            setOperator(value);
        }
        else if(!isNaN(value) || value == '.'){
            updateDisplay(value);
        }
    });
});

function deleteLastDigit(){
    displayText = displayText.slice(0,-1);
    displayScreen.textContent = displayText;
};

function setOperator(op){
    num1 = parseFloat(displayText);
    oprator = op;
    displayText = "";
};

function displayResult(){
    num2 = parseFloat(displayText);
    displayScreen.textContent  = operate();
    displayText = "";
}


function operate(){
    let result;

    if(oprator == '+'){
        return result = add(num1, num2);
    }
    if(oprator == '-'){
        return result = sub(num1, num2);
    }
    if(oprator == '/'){
        return result = div(num1, num2);
    }
    if(oprator == '*'){
        return result = mul(num1, num2);
    }
}

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}