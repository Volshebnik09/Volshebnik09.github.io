let bulb = document.querySelector('.bulb-on');

bulb.classList.toggle('bulb-is-off')

bulb.addEventListener('click',(e)=>{
	e.preventDefault()
	bulb.classList.toggle('bulb-is-on')
	bulb.classList.toggle('bulb-is-off')
})