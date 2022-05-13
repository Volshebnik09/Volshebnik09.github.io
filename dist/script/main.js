let field = document.querySelector('.top__animation-block').querySelector('svg');
let step = 80;
let radius = 40;
let setRadius = 0;
let mouseRadius = 200;
let mousePowerfullRadius = 10;
field.innerHTML = '';

let fWidth = field.getBoundingClientRect().width;
let fHeight = field.getBoundingClientRect().height;
for (var i = step; i < fHeight;i+=step)
    for (var j = step; j < fWidth;j+=step)
        field.innerHTML = field.innerHTML + '<circle cx='+j+' cy='+i+' r='+radius+' id='+i+','+j+' />'

circles = field.querySelectorAll('circle')

document.querySelector('.top').addEventListener('mousemove',(e)=>{
    circles.forEach(element => {
        let x = element.getBoundingClientRect().x ;
        let y = element.getBoundingClientRect().y ;
        let z = Math.sqrt(Math.abs(e.pageX-x)**2 +Math.abs(e.pageY-y)**2)
        if (z<= mouseRadius) {
            element.setAttribute('active','')
            if (z <=mousePowerfullRadius) 
                element.setAttribute('style','r: '+setRadius)
            else
            element.setAttribute('style','r: '+ Math.round(setRadius/(z/mouseRadius+1)));
            setTimeout(()=>{
                element.removeAttribute('active')
                element.removeAttribute('style')
            },500)
        } 
    });
})


