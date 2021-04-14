const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//represents the width and height needed to fill the entire screen (if entire map is filled)
let pixelWidth;
let pixelHeight;



function iterate(){
    pixelList.forEach((pixel) => {
        pixel.update(pixels);
    });
    draw();
    requestAnimationFrame(iterate);
}


function draw(){
    // clear canvas
    clearCanvas("black");
    // draw pixels
    pixelList.forEach((pixel) => {
        ctx.fillStyle = pixel.color;
        ctx.fillRect(pixel.x, pixel.y, 1, 1);
    });

    // draw mouse circle
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,0,0,0.25)"
    // ctx.arc(x,y,r,sAngle,eAngle)
    ctx.arc(mouseX, mouseY, radius, 0, 2*Math.PI);
    ctx.stroke();
}


//setup canvas
window.addEventListener("load", () => {
    resizeCanvas();
    scaleCanvas(pixelWidth, pixelHeight);
    clearCanvas("black");
    //launch loop
    iterate();
});

//reset canvas
window.addEventListener("resize", () => {
    resizeCanvas();
    scaleCanvas(pixelWidth, pixelHeight);
    clearCanvas("black");
    draw();
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    calculatePixelSize(canvas, mapWidth, mapHeight);
}

function clearCanvas(color){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, mapWidth, mapHeight);
}

//find better way, leaves gaps 
function calculatePixelSize(canvas, mapWidth, mapHeight) {
    pixelWidth = canvas.width/mapWidth;
    pixelHeight = canvas.height/mapHeight;
}

function scaleCanvas(pixelWidth, pixelHeight) {
    //reset scale
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    //set scale
    ctx.scale(pixelWidth, pixelHeight);
}