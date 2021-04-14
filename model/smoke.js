class Smoke extends Pixel {
    constructor(x, y) {
        const r = 255 - randomIntInclusive(0, 50);
        const g = 255 - randomIntInclusive(0, 50);
        const b = 255 - randomIntInclusive(0, 50);
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, false, rgb, 0);
    }


    update(array) {
        if(!this.isStable){
            let x = this.x;
            let y = this.y;

            //check north
            if(y-1 >= 0 && array[x][y-1] == undefined) {
                array[x][y] = undefined;
                array[x][y-1] = this;
                this.y--;
                return true;
            }
            //check north-west
            else if(x-1 >= 0 && y-1 >= 0 && array[x-1][y-1] == undefined){
                array[x][y] = undefined;
                array[x-1][y-1] = this;
                this.x--;
                this.y--;
                return true;
            }
            //check north-east
            else if(x+1 < mapWidth && y-1 >= 0 && array[this.x+1][this.y-1] == undefined){
                array[x][y] = undefined;
                array[x+1][y-1] = this;
                this.x++;
                this.y--;
                return true;
            }
            //check west
            else if(this.x-1 >= 0 && array[this.x-1][this.y] == undefined){
                array[this.x][this.y] = undefined;
                array[this.x-1][this.y] = this;
                this.x--;
                return true;
            }
            //check east
            else if(this.x+1 < mapWidth && array[this.x+1][this.y] == undefined){
                array[this.x][this.y] = undefined;
                array[this.x+1][this.y] = this;
                this.x++;
                return true;
            }
        }
    }
}