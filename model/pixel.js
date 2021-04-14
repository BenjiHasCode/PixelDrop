class Pixel{
    constructor(x, y, isStable, color, mass) {
        this.x = x;
        this.y = y;
        this.isStable = isStable;
        this.color = color;
        this.mass = mass;
    }

    update(array) {
        if(!this.isStable){
            const x = this.x;
            const y = this.y;
            
            //check bounds
            if(y+1< mapHeight) {
                    //MOVEMENT
                //check south
                if(array[x][y+1] == undefined) {
                    array[x][y] = undefined;
                    array[x][y+1] = this;
                    this.y++;
                    return true;
                }
                //check south-west
                else if(x-1 >= 0 && array[x-1][y+1] == undefined){
                    array[x][y] = undefined;
                    array[x-1][y+1] = this;
                    this.x--;
                    this.y++;
                    return true;
                }
                //check south-east
                else if(x+1 < mapWidth && array[x+1][y+1] == undefined){
                    array[x][y] = undefined;
                    array[x+1][y+1] = this;
                    this.x++;
                    this.y++;
                    return true;
                }

                    //MASS (if move = false, then check if mass is higher)
                //south
                else if(array[x][y+1] != undefined && array[x][y].mass > array[x][y+1].mass) {
                        //set their xy values
                        array[x][y].y++;
                        array[x][y+1].y--;
                        //swap indexes                
                        const temp = array[x][y];
                        array[x][y] = array[x][y+1];
                        array[x][y+1] = temp;
                        return true;
                }
                //south-west
                else if(x-1 >= 0 && array[x-1][y+1] != undefined && array[x][y].mass > array[x-1][y+1].mass) {
                    //set their xy values
                    array[x][y].y++;
                    array[x][y].x--;
                    array[x-1][y+1].y--;
                    array[x-1][y+1].x++;
                    //swap indexes                
                    const temp = array[x][y];
                    array[x][y] = array[x-1][y+1];
                    array[x-1][y+1] = temp;
                    return true;
                }
                //south-east
                else if(x+1 < mapWidth && array[x+1][y+1] != undefined && array[x][y].mass > array[x+1][y+1].mass) {
                    //set their xy values
                    array[x][y].y++;
                    array[x][y].x++;
                    array[x+1][y+1].y--;
                    array[x+1][y+1].x--;
                    //swap indexes                
                    const temp = array[x][y];
                    array[x][y] = array[x+1][y+1];
                    array[x+1][y+1] = temp;
                    return true;
                }
            }
            

            //if all else fails, return false, we didn't move
            return false;
        }
    }
}