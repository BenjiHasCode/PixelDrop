// we create a set that has references to all "active" pixels   - would honestly prefer a list, but back when I made it Set seemed like a good js alternative, maybe rework in future
// and a 2 dimensional array that contains references to ALL pixels
    //meaning we can use the 2d array to check if the pixel can move around
        //because we can see that some indexes are null/undefined
const pixelList = new Set();
const pixels = [];

const mapWidth = 192;
const mapHeight = 108;

//convert array to 2d array
for(i = 0; i < mapWidth; i++)
    pixels[i] = [];


function placePixels(x, y) {
    for(i = x-radius; i <= x+radius; i+=2){
        for(j = y-radius; j <= y+radius; j+=2){
            //check if x and why are with in acceptable bounds
            if(i >= 0 && i < mapWidth && j >= 0 && j < mapHeight){
                const distance = calculateDistance(x, y, i, j);
                if(distance <= radius){
                    let p = getCurrentType(i, j);
        
                    if (pixels[i][j] != undefined)
                        pixelList.delete(pixels[i][j]);
    
                    pixels[i][j] = p;

                    if(p != undefined)
                        pixelList.add(p);
                }
            }
        }
    }
}


function getCurrentType(x, y) {
    const type = document.getElementById("material").value;

    switch(type) {
        case "sand":
            return new Sand(x, y);
        case "water":
            return new Water(x, y);
        case "fire":
            return new Fire(x, y);
        case "smoke":
            return new Smoke(x, y);
        case "wood":
            return new Wood(x, y);
        case "acid":
            return new Acid(x, y);
        default:
            return undefined; // Should probably implement a remove type, but this essentially removes stuff
    }
}