let displayText = "";
let num1 = null;
let num2 = null;
let oprator = null;
let result;

const displayOutput = document.querySelector('.outputScreen .output');
const displayPrevOutput = document.querySelector('.outputScreen .prevOutput');

function updateDisplay(value){
    displayText += value;
    displayOutput.textContent = displayText;
};

function clearDisplay(){
    displayText = "";
    num1 = null;
    num2 = null;
    operate = null;
    displayOutput.textContent = "0";
    displayPrevOutput.textContent = "";
};

document.querySelectorAll('.board button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.id;

        console.log(value);

        
        if(value == "C" || value == "CE"){
            clearDisplay();
        }
        else if(value == "delete"){
            deleteLastDigit();
        }
        else if(value == "="){
            displayResult();
        }
        else if(value == "+" || value == "-" || value == "*" || value == "/"){
            setOperator(value);
        }
        else if(!isNaN(value) || value == '.'){
            updateDisplay(value);
        }
    });
});

function deleteLastDigit(){
    displayText = displayText.slice(0,-1);
    displayOutput.textContent = displayText;
};

function setOperator(op){
    num1 = parseFloat(displayText);
    oprator = op;
    displayPrevOutput.textContent = displayText + " " + op + " ";
    displayText = "";
};

function displayResult(){
    num2 = parseFloat(displayText);
    displayPrevOutput.textContent += displayText + " =";
    result = operate();
    displayOutput.textContent = result ;
    num1 = result;
    displayText = result;
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