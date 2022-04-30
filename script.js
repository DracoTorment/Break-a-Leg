let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

<<<<<<< Updated upstream
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
=======
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
     console.log(keyCode)
 })
>>>>>>> Stashed changes
