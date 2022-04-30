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
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
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

let player = new Player()
let platforms = []
platforms.push(new Platform(100, 300))
platforms.push(new Platform(300, 100))
platforms.push(new Platform(500, 200))
platforms.push(new Platform(700, 400))
platforms.push(new Platform(800, 300))
platforms.push(new Platform(1000, 500))
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update();
    platforms.forEach(platform => {platform.update();
        if (keys.right.pressed && player.position.x < 450) player.velocity.x = 5
        else if (keys.left.pressed && player.position.x > 150) player.velocity.x = -5
        else { 
            player.velocity.x = 0 
            if (keys.right.pressed) platform.position.x -= 5;
            else if(keys.left.pressed) platform.position.x += 5;
        }
    
        if (player.position.y + player.height <= platform.position.y
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width)
            player.velocity.y = 0;})
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