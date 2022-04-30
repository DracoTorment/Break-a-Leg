
const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

=======
let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

<<<<<<< HEAD
=======

>>>>>>> f0a453bc9af27464fc785656cb159e44ac9156f0
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
    }
}
class Platform {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 30
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
    }
}

let player = new Player()
player.draw()
let platform = new Platform()
platform.draw()

function animate() {
    requestAnimationFrame(animate)

}
animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            break
        case 'w':
            console.log('up')
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            break
        case 'w':
            console.log('up')
            break
    }
})

<<<<<<< HEAD
=======

>>>>>>> f0a453bc9af27464fc785656cb159e44ac9156f0
canvas.width = 240*8;
canvas.height = 96*8;
const background = new Image();
background.src = 'assests/stage_1.png';
const up = new Image();
up.src =  'assests/MainCup.png';
const down = new Image();
down.src =  'assests/MainCdown.png';
const left = new Image();
left.src =  'assests/MainCleft.png';
const right = new Image();
right.src =  'assests/MainCleft-1.png';

const reg = new Image();
reg.src = 'assests/MainCsideF2.png';
const A = new Image();
A.src = 'assests/a_plus.png'
var key;
var state = 0;
var next = 1;
var score = 0;
var sub = 0;
prev = 0;


function characterstate(){
    if(state == 0){
        c.drawImage(reg, 1230, 550, 120, 120);
    }
    else if(state == 1){
        c.drawImage(up, 1230, 550, 120, 120);
    }
    else if(state == 2){
        c.drawImage(left, 1230, 550, 120, 120);
    }
    else if(state == 3){
        c.drawImage(down, 1230, 550, 120, 120);
    }
    else if(state == 4){
        c.drawImage(right, 1230, 550, 120, 120);
    }
}

function nxt(){
    if (score > 9){
        c.drawImage(A, 970, 210, 70, 60);
        c.drawImage(A, 1530, 210, 70, 60);  
    }
    else if (state == next && sub == 1){
        score ++;
        prev = next
        while(prev == next){
        next = (Math.floor(Math.random() * 4))+1;
        }
        sub = 2;
    }
    else if (sub == 1){
        score = 0;
        sub = 2;
    }
}

function arrows(){
    c.fillStyle = 'rgba(192,80,77,0.7)';
    if(next == 1){
    c.fillRect(232, 48, 128, 128);
    }
    else if(next == 2){
    c.fillRect(88, 192, 128, 128);
    }
    else if(next == 3){
        c.fillRect(232, 192, 128, 128);
    }
    else if(next == 4){
        c.fillRect(376, 192, 128, 128);
    }
}

function printscore(){
    c.fillStyle = 'black';
    c.font = "50px Arial";
    c.fillText(score, 1267, 260);
}

function animate(){
    c.drawImage(background, 0, 0, canvas.width, canvas.height);
    characterstate();
    printscore();
    if (sub == 0){
    c.fillStyle = 'black';
    c.font = "40px ComicSans";
    c.fillText("Break A Leg", 350, 400);
    }
    nxt();
    arrows();
    requestAnimationFrame(animate);

var key;

function waitingKeypress() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        if (e.keyCode === 13) {
          document.removeEventListener('keydown', onKeyHandler);
          resolve();
        }
      }
    });
  }

// function characterstate(){
//     if(key == 1){

//     }
//     else if(){}
// }

// function nxt(){


//}

function animate(){
    c.drawImage(background, 0, 0, canvas.width, canvas.height);
    //characterstate();
    //nxt();
    requestAnimationFrame(animate);
    //await waitingKeypress();

 }

 animate();

 addEventListener('keydown', ({keyCode}) => {

     switch(keyCode){
        case 87:
            console.log ('up');
            state = 1;
            sub = 1;
            break;
        case 65:
            console.log ('left');
            state = 2;
            sub = 1;
            break;
        case 83:
            console.log ('down');
            state = 3;
            sub = 1;
            break;
        case 68:
            console.log ('right');
            state = 4;
            sub = 1;
            break;
     }
 })

     console.log(keyCode)
 })

