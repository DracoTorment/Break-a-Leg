let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

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