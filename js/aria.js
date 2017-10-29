var increment = document.querySelector('#inc');
var decrement = document.querySelector('#dec');
var counter = document.querySelector('#count');

var count = 0;

increment.addEventListener('click', add);
decrement.addEventListener('click', subtract);

function add() {
	count = count + 10;
	setCounter();
}

function subtract() {
	count = count - 10;
	setCounter();
}

function setCounter() {
	counter.innerHTML = count;
}

setCounter();