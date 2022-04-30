let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 468
let gravity = 0.51;
class Player {
    constructor() {
        this.position = {
            x: 200,
            y: 200
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
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        //if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        //else this.velocity.y = 0
        this.draw()
    }
}
class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y
        }
        this.width = 150
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
class GenericObject {
    constructor(x, y, img) {
        this.position = {
            x,
            y,
        }
        this.img = img;
    }
    draw() {
        c.drawImage(this.img, this.position.x, this.position.y)
    }

}

let background = new GenericObject(0, 0, createImage('assests/Stages/Stage_2.png'));
let player = new Player()
let platforms = []
for (let i = 0; i < 50; i++) {
    platforms.push(new Platform(i * 200, Math.random() * 300 + 100))
}

let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc;
    return image
}
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    background.draw()
    player.update();
    platforms.forEach(platform => {
        platform.update();
    })
    if (keys.right.pressed && player.position.x < 450) player.velocity.x = 5
    else if (keys.left.pressed && player.position.x > 150) player.velocity.x = -5
    else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            background.position.x -= 2
        }
        else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5
            })
            background.position.x += 2

        }
    }
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width)
            player.velocity.y = 0;
    })
}
animate()

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            keys.left.pressed = true
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            keys.right.pressed = true
            break
        case 'w':
            console.log('up')
            if (player.velocity.y == 0) player.velocity.y -= 15
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left')
            keys.left.pressed = false
            break
        case 's':
            console.log('down')
            break
        case 'd':
            console.log('right')
            keys.right.pressed = false
            break
        case 'w':
            console.log('up')
            break
    }
})