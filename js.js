const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
const equalsButton = document.querySelector('.result');

const screenMain = document.querySelector('.screen-main');
const screenTop = document.querySelector('.screen-top');

// declaring and initializing global variables
let previousNum = '';
let currentNum = '';
let operator = '';
let result = '';


// creating functions for each functioning of calculator

// updating mainscreen
function mainScreenDisplay(e) {
	if (e.target.textContent == '.' && currentNum.includes('.')) return;
	currentNum += e.target.textContent;
	screenMain.textContent = currentNum;
};
	
// updating topscreen
function topScreenDisplay(e) {
	if (currentNum == '' && previousNum == '') return;
	previousNum = currentNum;
	currentNum = '';
	operator = e.target.getAttribute('data-key');
	screenMain.textContent = '';
	screenTop.textContent = previousNum + ' ' + e.target.textContent;
}


// clear screen
function clearScreen() {
	currentNum = '';
	previousNum = '';
	screenMain.textContent = '';
	screenTop.textContent = '';
}

// backspace
function backspace() {
	const strArr = currentNum.split('');
	strArr.pop();
	currentNum = strArr.join('');
	screenMain.textContent = currentNum;
}

// equals operate function
function operation() {
	result = operate(operator, previousNum, currentNum);
	screenMain.textContent = result;
	screenTop.textContent = '';
	currentNum = '';
	
}

numberButtons.forEach(button => button.addEventListener('click', mainScreenDisplay))


	
operatorButtons.forEach(button => button.addEventListener('click', topScreenDisplay))

clearButton.addEventListener('click', clearScreen)

backspaceButton.addEventListener('click', backspace)

equalsButton.addEventListener('click', operation)



// operate function

function operate(operator, num1, num2) {
	switch (operator) {
		case '+': 
			return add(num1, num2);
			break;
		case '-':
			return minus(num1, num2);
			break;
		case '*':
			return multiply(num1, num2);
			break;
		case '/':
			return divide(num1, num2);
			break;
	}
	
}


// operation functions

function add(num1, num2){
	return Number(num1) + Number(num2);
}

function minus(num1, num2){
	return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
	return Number(num1) * Number(num2);
}

function divide(num1, num2) {
	if (num2 === '0' || num2 == 0){
		clearScreen();
		return `${mathematicians[random(mathematicians.length)]} is furious at you
		for dividing by zero.`
	}
	return Math.round((Number(num1)/Number(num2))*100)/100;
}

////////////////////// some fun is definitely to be had...

const mathematicians = ['Euclid', 'Pythagoras', 'Archimedes',
						'Thales of Miletus', 'Aristotle', 'Diophantus',
						'Eratosthenes', 'Hipparchus', 'Ptolemy',
						'Xenocrates', 'Hypatia', 'Antiphon',
						'Diocles', 'Alan Turing', 'Srinivasa Ramanujan',
						'Aryabhata', 'Ada Lovelace', 'John Forbes Nash Jr.',
						'Carl F. Gauss', 'Leonhard Euler', 'Avicenna',
						'Blaise Pascal', 'Omar Khayyam', 'Grigori Perelman',
						'Leonardo Fibonacci', 'Kurt Gödel', 'Brahmagupta',
						'George Boole',	'Abū Rayḥān al-Bīrūnī', 'Emmy Noether', 'Isaac Newton',
						'Bhāskara II', 'Mary Jackson']

function random(num){
	return Math.floor(Math.random() * num);
}

/////////////////////////////////////////////////////////



