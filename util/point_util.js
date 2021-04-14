function translatePoint(x, y, canvas_width, canvas_height, mapWidth, mapHeight) {
    let widthDif = (canvas_width - mapWidth) / mapWidth;
    let heightDif = (canvas_height - mapHeight) / mapHeight;

    let newX = Math.floor(x / (widthDif + 1));
    let newY = Math.floor(y / (heightDif + 1));
    
    return {x: newX, y: newY};
}