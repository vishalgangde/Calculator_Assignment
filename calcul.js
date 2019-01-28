function clearAll(){

var display = document.getElementById("display");
numbers = "";
stored = "";
Operatios = 0;
operation = 0;
display.value = numbers;
}

function inputNumber(num){

var display = document.getElementById("display");
if((dispaly.value == "")&& num == "0"){
return ;
}

else if(endCalculation == true){
display.vlaue = num;
endCalculation = false;

}

else{

display.value += num;
}
}

function operation(operator){

var dispaly = document.getElementById("display");
numbers = dispaly.value;

evalDisplay = eval(numbers);
evalstore = eval(stored);

if(operation == 0){
stored = dispaly.value;

}

else if(operation == 1){
stored = evalstore + evalDisplay;
}

else if(operation == 2){
stored = evalstore - evalDisplay;
}

else if(operation == 3){
stored = evalstore * evalDisplay;
}

else if(operation == 4){
stored = evalstore / evalDisplay;
}

else if(operation == 5){
stored = evalstore % evalDisplay;
}

if(command == 'add'){
operation = 1;
}

else if(command == 'subtract'){
operation = 2;
}

else if(command == 'multiplication'){
operation = 3;
}

else if(command == 'division'){
operation = 4;
}

if(command == 'module'){
operation = 5;
}
Operatios = operation;
display.value='';
}



function calculate(){
var display = document.getElementById("display");
numbers = display.value;
var evalDisplay = eval (numbers);
var evalstore =  eval (stored);


if(operation == 1){
numbers = evalstore + evalDisplay;
}

else if(operation == 2){
numbers = evalstore - evalDisplay;
}

else if(operation == 3){
numbers = evalstore * evalDisplay;
}

else if(operation == 4){
numbers = evalstore / evalDisplay;
}
else(operation == 5){
numbers = evalstore / evalDisplay;
}

display.value = numbers
}

