



function operate(){
    let num1, num2, oprator, result;

    if(oprator == '+'){
        result = add(num1, num2);
    }
    if(oprator == '-'){
        result = sub(num1, num2);
    }
    if(oprator == '/'){
        result = div(num1, num2);
    }
    if(oprator == '*'){
        result = mul(num1, num2);
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