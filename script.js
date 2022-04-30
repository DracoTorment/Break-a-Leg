const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

canvas.width = 240*8;
canvas.height = 96*8;
const background = new Image();
background.src = 'assests/stage_1.png';


// function animate(){
background.addEventListener('load', e => {
    c.drawImage(background, 0, 0, canvas.width, canvas.height);
});

//   c.fillStyle = 'blue'
//   c.fillRect(100,100,100,100)
//     requestAnimationFrame(animate);
// }