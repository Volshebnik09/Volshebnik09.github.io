let jokes = document.querySelectorAll('.block-2__statement')

function hideAll(){
	jokes.forEach( function(element, index) {
		element.classList.add('joke-hidden');
	});
}

function openOne(id){
	hideAll()
	jokes[id].classList.toggle('joke-hidden')
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
openOne(randomInteger(0,jokes.length-1))