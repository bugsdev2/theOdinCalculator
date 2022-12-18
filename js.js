const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator')
const screenBot = document.querySelector('.screen-bot');
const screenTop = document.querySelector('.screen-top');

//~ console.log(operators.forEach(operator => console.log(operator.classList)))
const reg = /[0-9]/;
const num1Arr = [];
const num2Arr = [];
let num1 = '';
let num2 = '';
let temp = '';
let operend = '';
window.addEventListener('keydown', keypress);

buttons.forEach(button => {
	button.addEventListener('click', click);
})

function click(e) {
	if (!reg.test(e.target.getAttribute('data-key'))){
		operend = e.target.getAttribute('data-key');
		e.target.classList.toggle('pressed');
	}
}




function keypress(e) {
	const button = document.querySelector(`div[data-key="${e.key}"`);
	if (reg.test(button.getAttribute('data-key'))){
		console.log(button);
	}
	
}

function add(num1, num2){
	return num1 + num2;
}
