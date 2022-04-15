let cards = document.querySelectorAll('.my-sites__card')


document.body.addEventListener('click', (e)=>{
  if (!('my-sites__card' == e.path[2].classList.value))
    cards.forEach((item) => {
      item.removeAttribute('active','');
    })
})

let bool = false;
cards.forEach((item) => {
  item.querySelector('.my-sites__card__img').addEventListener('click',()=>{
  	if (item.hasAttribute('active')) 
  		bool=true;
  	cards.forEach((otheritem)=>{
  		otheritem.removeAttribute('active','');
  	})
  	item.hasAttribute('active')? 
  	item.removeAttribute('active',''):
  	item.setAttribute('active','')

  	if (bool) 
  		item.removeAttribute('active','')
  	bool=false
  })
})