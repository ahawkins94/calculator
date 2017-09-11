
var operator = prompt ('Choose your operator: \n+ to add \n- to subtract\n* to multiply\n/ to divide\nsquare to square a number\npow to find the power of a number\nroot to find the square root of a number');


if (operator === '+') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne + numberTwo);

	var alertInput = numberOne + ' + ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);

}

if (operator === '-') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne - numberTwo);

	var alertInput = numberOne + ' - ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);

}

if (operator === '*') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne * numberTwo);

	var alertInput = numberOne + ' * ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);

}

if (operator === '/') {

	var numberOne = prompt ('Choose your first number:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( 'Choose your second number');
	numberTwo = parseFloat(numberTwo);

	var numberThree = (numberOne / numberTwo);

	var alertInput = numberOne + ' / ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);

}

if (operator === 'square') {

	var numberOne = prompt ('Choose the number you would like to square:');
	numberOne = parseFloat(numberOne);

	var numberThree = (numberOne * numberOne);

	var alertInput = numberOne + ' * ' + numberOne + ' = ' + numberThree;
	alert(alertInput);

}

if (operator === 'pow') {

	var numberOne = prompt ('Choose the number you want to find the power of:');
	numberOne = parseFloat(numberOne);
	var numberTwo = prompt ( numberOne + ' to the power of: ');
	numberTwo = parseFloat(numberTwo);

	var numberThree = Math.pow(numberOne, numberTwo)

	var alertInput = numberOne + ' to the power of ' + numberTwo + ' = ' + numberThree;
	alert(alertInput);
}


if (operator === 'root') {

	var numberOne = prompt ('Choose the number to find the square root of:');
	numberOne = parseFloat(numberOne);

	var numberThree = Math.sqrt(numberOne)

	var alertInput =' the square root of ' + numberOne + ' is ' + numberThree;
	alert(alertInput);

}	 

if (operator !== ('+' || '-' || '/' || '*' || 'pow' || 'root' || 'square')) {

 	alert('Invalid operator! Please refresh the page and choose a correct operator: \n+ to add \n- to subtract\n* to multiply\n/ to divide\nsquare to square a number\npow to find the power of a number\nroot to find the square root of a number')

} else {
	alert('Refresh the page to do another calculation!')
}





