function clearAll(){

	var display = document.getElementById("display");
	numbers = "";
	stored = "";
	allOperatios = 0;
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
			evalStore = eval(stored);

			if(operation == 0){
			stored = dispaly.value;
			}

			else if(operation == 1){
			stored = evalStore + evalDisplay;
			}

			else if(operation == 2){
			stored = evalStore - evalDisplay;
			}

			else if(operation == 3){
			stored = evalStore * evalDisplay;
			}

			else if(operation == 4){
			stored = evalStore / evalDisplay;
			}

			else if(operation == 5){
			stored = evalStore % evalDisplay;
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
				allOperatios = operation;
				display.value='';
				}



				function calculate(){
				var display = document.getElementById("display");
				numbers = display.value;
				var evalDisplay = eval(numbers);
				var evalStore =  eval(stored);

				if(operation == 1){
				numbers = evalStore + evalDisplay;
				}

				else if(operation == 2){
				numbers = evalStore - evalDisplay;
				}

				else if(operation == 3){
				numbers = evalStore * evalDisplay;
				}

				else if(operation == 4){
				numbers = evalStore / evalDisplay;
				}
				
				else(operation == 5){
				numbers = evalStore / evalDisplay;
				}

				display.value = numbers
				}

