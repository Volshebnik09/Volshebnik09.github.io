sentences = ['I Love Cookies...', 'html Css javascript','Welcome...', 'Hello world!']

function load () {
	let text = document.querySelector('#presceen__written-text');
	let sentence = 0;
	text.innerHTML = ''
	writer(sentence,sentences,text)
}

function writer(sentence,sentences,text,phase='write'){

	if (sentence >= sentences.length) {
		sentence = 0
	}
	if (phase == 'write') {
		if (sentences[sentence].length > text.innerHTML.length) {
			text.innerHTML = sentences[sentence].slice(0,text.innerHTML.length+1)
			setTimeout(() => {
				writer(sentence,sentences,text)
			}
			,100)
		} else {
			setTimeout(() => {
				writer(sentence,sentences,text,'clear')
			}, 1300)
		}
	}
	if (phase == 'clear') {
		if (text.innerHTML.length > 0) {
			setTimeout(() => {
				text.innerHTML = text.innerHTML.slice(0,text.innerHTML.length-1)
				writer(sentence,sentences,text, 'clear')
			},50)
		} else {
			setTimeout(() => {
				writer(sentence+1,sentences,text, 'write')
			},600)
		}
	}
}

window.onload = function(){
	load()
}