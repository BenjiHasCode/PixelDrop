let clicked = false;
let mouseX;
let mouseY;
let radius = document.getElementById("radius").valueAsNumber;

canvas.addEventListener("mousedown", (e)=> {
    //set button to clicked
    if(e.button == 0){
        clicked = true;
        //translate point
        point = translatePoint(e.clientX, e.clientY, canvas.width, canvas.height, mapWidth, mapHeight);
        //place pixels
        placePixels(point.x, point.y);
    }
});

//translate where mouse has moved to
//placePixels if mouse clicked
canvas.addEventListener("mousemove", (e) => {
    const point = translatePoint(e.clientX, e.clientY, canvas.width, canvas.height, mapWidth, mapHeight);
    if(clicked)
        placePixels(point.x, point.y);
    mouseX = point.x;
    mouseY = point.y;
});

canvas.addEventListener("mouseup", (e) => {
    if(e.button == 0){
        clicked = false;
    }
});


document.getElementById("radius").addEventListener("input", (e) => {
    console.log(e);
    radius = document.getElementById("radius").valueAsNumber;
});