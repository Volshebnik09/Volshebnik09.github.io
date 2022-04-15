'use strict';
let plate_intro = document.querySelector('.cube-plate');
let cube = document.querySelector('.cube');
let cubeUserStyles ={};
Object.assign(cubeUserStyles, getComputedStyle(cube));
let cubeSides = document.querySelectorAll('.cube-side');
cube.mouseIsDown = false;
let clipOn = true;
let secret = 0;

function buildCube(height,posX,posY,speedRotationX =0,speedRotationY = 1,speedRotationZ = 0,rotateStartX = 0,rotateStartY = 0,rotateStartZ = 0){
    cube.style.position = "absolute";
    cube.style.transformStyle = 'preserve-3d';
    cube.style.height = height+'px';
    cube.style.width = height+'px';
    cube.style.userSelect = 'none';
    if (posX !=undefined) {
        cube.style.left = posX;
    } else {
        cube.style.left = 50+'%';
    }
    if (posY !=undefined) {
        cube.style.top = posY;
    } else {
        cube.style.top = 50+'%';
    }
    cube.style.transform = 'translateX(-50%)' + 'translateY(-50%)';
    cubeSides.forEach(el =>{
        el.style.height ='inherit';
        el.style.width = 'inherit';
        el.style.position = "absolute";
        el.style.display = "block";
    })
    cubeSides[0].style.transform = "rotateX(-90deg) translateZ(-"+height/2+"px)";
    cubeSides[1].style.transform = "rotateX(90deg) translateZ(-"+height/2+"px)";
    cubeSides[2].style.transform = "translateZ(-"+height/2+"px)";
    cubeSides[3].style.transform = "rotateY(180deg) translateZ(-"+height/2+"px)";
    cubeSides[4].style.transform = "rotateY(-90deg) translateZ(-"+height/2+"px)";
    cubeSides[5].style.transform = "rotateY(90deg) translateZ(-"+height/2+"px)";
    if (cubeSides.length > 6) {
        let removedSides = 0;
        for (let i = 6; i < cubeSides.length; i++) {
            removedSides++;
            cubeSides[i].remove();
        }
        console.warn('Overabundance of cube sides\n Removed: ' + removedSides)
    }
    //start anim
    cube.style.transition = '0s';
    let temp = cube.style.transform;
    cube.style.transform = temp +'scale3d(0.01,0.01,0.01)';
    setTimeout(() => {
        cube.style.transition = '1s';
        cube.style.transform = temp;
        setTimeout(() => {
            cube.style.transition = cubeUserStyles.transition;
        }, 1000);
    }, 100);
    setTimeout(() => {
        cube.addEventListener('mousedown', function(e){
            cube.mouseIsDown = true;
        })
        cube.addEventListener('mouseup', function(e){
            cube.mouseIsDown = false;
        })
        cube.addEventListener('dblclick', function(e){
            let speedRotationYTemp =speedRotationY;
            console.log('speed')
            speedRotationY +=30;
            function slow_reduce() {
                setTimeout(() => {
                    if (speedRotationY > speedRotationYTemp) {
                        speedRotationY = Math.floor(speedRotationY/1.2);
                        console.log(speedRotationY)
                        slow_reduce();
                    }
                    else speedRotationY = speedRotationYTemp;
                }, 1000);
            }
            slow_reduce();
        })
        document.addEventListener('mousemove', function(e){
            if (cube.mouseIsDown && clipOn) clip(e,cube,plate_intro);
        })
    }, 1000);

    setTimeout(() => {
        let cubeStylesTransformTemp = cube.style.transform;
        setInterval(() => {
            cube.style.transform = cubeStylesTransformTemp +
            "rotateX("+eval(rotateStartX+secret)+"deg)"+ 
            "rotateY("+rotateStartY+"deg)"+ 
            "rotateZ("+rotateStartZ+"deg)";
            rotateStartX +=speedRotationX;
            rotateStartY +=speedRotationY;
            rotateStartZ +=speedRotationZ;
        }, 100);
    }, 1000);
}

function clip(e,cube,parrent){
    let x,y,maxX,maxY;
    if (parrent) { //border
        x = parrent.offsetLeft ;
        y = plate_intro.offsetTop;
        maxX =plate_intro.offsetWidth;
        maxY = plate_intro.offsetHeight;
    }else { // default border
        x =0;
        y =0;
        maxX = document.body.clientWidth;
        maxY = document.body.clientHeight;
    }
    let cubeOffsetY = e.pageY-cube.clientHeight/2;
    let cubeOffsetX = e.pageX;
    if (cubeOffsetY < y) cubeOffsetY = y;
    if (cubeOffsetY > maxY) cubeOffsetY = maxY;
    if (cubeOffsetX < x) cubeOffsetX = x;
    if (cubeOffsetX > maxX) cubeOffsetX =maxX;
    cube.style.top = cubeOffsetY +'px';
    cube.style.left = cubeOffsetX +'px';
}
