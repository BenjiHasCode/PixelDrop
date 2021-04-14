class Water extends Pixel {
    constructor(x, y) {
        const r = 0;
        const g = 255;
        const b = 255;
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, false, rgb, 1);
    }

    update(array) {
        //if haven't updated check west and east
        if (!super.update(array)) {
            //check west
            if(this.x-1 >= 0 && array[this.x-1][this.y] == undefined){
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