const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const resultButton = document.querySelector('.result');

const screenMain = document.querySelector('.screen-main');
const screenTop = document.querySelector('.screen-top');

// declaring and initializing global variables
let previousNum = '';
let currentNum = '';
let temp = '';
let operend = '';

numberButtons.forEach(button => button.addEventListener('click', mainScreenDisplay))

function mainScreenDisplay(e) {
		currentNum += e.target.textContent;
		screenMain.textContent = currentNum;
	};
	
operatorButtons.forEach(button => button.addEventListener('click', topScreenDisplay))

function topScreenDisplay(e) {
	operend = e.target.getAttribute('data-key');
	previousNum = currentNum;
	currentNum = '';
	screenMain.textContent = '';
	screenTop.textContent = previousNum + ' ' + operend;
}

resultButton.addEventListener('click', mainOperation)

function mainOperation(e) {
	let result = operate(operend, previousNum, currentNum);
	currentNum = '';
	screenMain.textContent = result;
}


// operate function

function operate(operend, num1, num2) {
	switch (operend) {
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
		return `${mathematicians[random(mathematicians.length)]} is furious at you.`
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
						'George Boole', 'Muḥammad ibn Mūsā al-Khwārizmī',
						'Abū Rayḥān al-Bīrūnī', 'Emmy Noether', 'Isaac Newton',
						'Bhāskara II', 'Mary Jackson']

function random(num){
	return Math.floor(Math.random() * num);
}

/////////////////////////////////////////////////////////



