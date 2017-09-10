console.log('hi im adam')

var operator = prompt ('Choose your operator:');


if (operator === '+') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne + numberTwo);
	console.log(numberThree);

	var alertInput = numberOne + ' + ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);

}

if (operator === '-') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne - numberTwo);
	console.log(numberThree);

	var alertInput = numberOne + ' - ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);

}

if (operator === '*') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne * numberTwo);
	console.log(numberThree);

	var alertInput = numberOne + ' * ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);

}

if (operator === '/') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne / numberTwo);
	console.log(numberThree);

	var alertInput = numberOne + ' / ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);

}


if (operator !== ('+' || '-' || '/' || '*')) {
	var operator = prompt('Invalid operator! Please choose a correct operator:')
}

var operator = prompt('Choose your operator')
