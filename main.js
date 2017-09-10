console.log('hi im adam')

var operator = prompt ('Choose your operator: \n+ to add \n- to subtract\n* to multiply\n/ to divide\nsquare to square a number\npow to find the power of a number\nroot to find the square root of a number');


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

// } 	else if (operator !== ('+' || '-' || '/' || '*')) {
// 		var operator = prompt('Invalid operator! Please choose a correct operator: \n+ to add \n- to subtract\n* to multiply\n/ to divide')

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

if (operator === 'square') {

	var numberOne = prompt ('Choose the number you would like to square:');
	numberOne = parseFloat(numberOne);

	var numberThree = (numberOne * numberOne);
	console.log(numberThree);

	var alertInput = numberOne + ' * ' + numberOne + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);

}

if (operator === 'pow') {
	var numberOne = prompt ('Choose the number you want to find the power of:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( numberOne + 'to the power of: ');
	numberTwo = parseFloat(numberTwo);

	var numberThree = Math.pow(numberOne, numberTwo)
	console.log(numberThree)

	var alertInput = numberOne + ' to the power of ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
	console.log(alertInput);
}


if (operator === 'root') {
	var numberOne = prompt ('Choose the number to find the square root of:');
	numberOne = parseFloat(numberOne);

	var numberThree = Math.sqrt(numberOne)
	console.log(numberThree)

	var alertInput =' the square root of ' + numberOne + ' is ' + numberThree;
	alert(alertInput);
	console.log(alertInput);
}
