class Acid extends Pixel {
    constructor(x, y) {
        const r = 0 + randomIntInclusive(0, 75);
        const g = 255;
        const b = 0 + randomIntInclusive(0, 75);
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, false, rgb, .75);
    }

    update(array){
        let hasMoved = super.update(array);
         //if haven't updated check west and east
         if (!hasMoved) {
            //check west
            if(this.x-1 >= 0 && array[this.x-1][this.y] == undefined){
                array[this.x][this.y] = undefined;
                array[this.x-1][this.y] = this;
                this.x--;
                hasMoved = true;
            }
            //check east
            else if(this.x+1 < mapWidth && array[this.x+1][this.y] == undefined){
                array[this.x][this.y] = undefined;
                array[this.x+1][this.y] = this;
                this.x++;
                hasMoved = true;
            }
        }

        //corrode check
        if (!hasMoved){
            for (let i = -1; i <= 1; i++) {
                for (let j = 0; j <= 1; j++) {
                    //check bounds
                    if((this.x+i >= 0 && this.x+i < mapWidth) && (this.y+j >= 0 && this.y+j < mapHeight)) {
                        //if i & j are both 0 then it's checking itself
                        if (!(i == 0 && j == 0)) {
                            const x = this.x + i;
                            const y = this.y + j;
                            //check if pixel exists at position
                            if (array[x][y] != undefined) {
                                const random = randomIntInclusive(0, 1000);
                                //check if wood
                                if (array[x][y] instanceof Wood) {
                                    if (random < 10) {
                                        //remove the consumed part from set
                                        pixelList.delete(array[x][y]);
                                        array[this.x][this.y] = undefined;

                                        //insert into array
                                        array[x][y] = this;
                                        this.x = x;
                                        this.y = y;
                                    } 
                                }
                                //check if sand
                                else if (array[x][y] instanceof Sand) {
                                    let random = randomIntInclusive(0, 1000);
                                    if (random < 25) {
                                        //remove the consumed part from set
                                        pixelList.delete(array[x][y]);
                                        array[this.x][this.y] = undefined;

                                        //insert into array
                                        array[x][y] = this;
                                        this.x = x;
                                        this.y = y;
                                    } 
                                }
                            }
                        }
                    }  
                }
            }
        }
    }
}