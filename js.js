const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator')
const screenBot = document.querySelector('.screen-bot');
const screenTop = document.querySelector('.screen-top');

//~ console.log(operators.forEach(operator => console.log(operator.classList)))
const reg = /[0-9]/;
const reg2 = /\D/
const expArr = [];
const num1Arr = [];
const num2Arr = [];
//~ let num1 = '';
//~ let num2 = '';
let temp = '';
let operend = '';
window.addEventListener('keydown', keypress);

buttons.forEach(button => {
	button.addEventListener('click', clickButton);
})

function clickButton(e) {
	
	if (reg2.test(e.target.getAttribute('data-key'))) {
		if(expArr[expArr.length-1] === '+' || expArr[expArr.length-1] === '-' || expArr[expArr.length-1] === '*' || expArr[expArr.length-1] === '/') {
		expArr.pop();
		}
	}
	if (e.target.getAttribute('class').includes('operator')){
		operend = e.target.getAttribute('data-key');
	}
	
	expArr.push(e.target.getAttribute('data-key'));
	let exp = expArr.join('');	
	let num1 = exp.slice(0, exp.indexOf(operend));
	let num2 = exp.slice(exp.indexOf(operend)+1);
	
	console.log(expArr, operend);
	console.log(exp, num1, num2);
	

	
	//~ console.log(e.target);
	//~ if (e.target.getAttribute('class').includes('result')) {
		//~ let test = add(num2, num1);
		//~ console.log(test);
	
	//~ } else if (e.target.getAttribute('class').includes('operator')){
		//~ num2 = num1;
		//~ num1 = '';
		//~ operend = e.target.getAttribute('data-key');
	//~ } else {
		//~ num1 += e.target.textContent;
	//~ }
	//~ console.log(num1, operend, num2)
	//~ if (!reg.test(e.target.getAttribute('data-key'))){
		//~ operend = e.target.getAttribute('data-key');
		//~ e.target.classList.toggle('pressed');
	//~ }
}



//~ function operendFunc(input) {
	//~ operend = input;
//~ }



function keypress(e) {
	const button = document.querySelector(`div[data-key="${e.key}"`);
	if (reg.test(button.getAttribute('data-key'))){
		console.log(button);
	}
	
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
	}
}


// operation functions

function add(num1, num2){
	return num1 + num2;
}

function minus(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
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

function divide(num1, num2) {
	if (num2 === 0){
		return `${mathematicians[random(mathematicians.length)]} is furious at you.`
	}
	return Math.round((num1/num2)*100)/100;
}
