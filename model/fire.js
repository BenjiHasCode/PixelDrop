class Fire extends Pixel {
    constructor(x, y) {
        const r = 255;
        const g = 165 - randomIntInclusive(0, 165);
        const b = 0;
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, false, rgb, .1);

        // fire doesn't burn forever so we give a life value
        this.life = randomIntInclusive(100, 200);
    }


    update(array) {
        //call supers update
        //if returns false, see if we can ignite neighbours
        if (!super.update(array)){
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    //check bounds
                    if((this.x+i >= 0 && this.x+i < mapWidth) && (this.y+j >= 0 && this.y+j < mapHeight)) {
                        //if i & j are both 0 then it's checking itself
                        if (!(i == 0 && j == 0)) {
                            const x = this.x + i;
                            const y = this.y + j;
                            //check if pixel exists at position
                            if (array[x][y] != undefined) {
                                //check if water                        //SEEMS TO WORK REALLY WELL, Which honestly surprised me >.<
                                if (array[x][y] instanceof Water) {
                                    //if hit water = convert to smoke
                                    let smoke = new Smoke(x, y);
                                    pixelList.delete(array[x][y]);
                                    pixelList.add(smoke);
                                    array[x][y] = smoke;

                                    //delete self
                                    pixelList.delete(this);
                                    array[this.x][this.y] = undefined;
                                }
                                //check if wood
                                else if (array[x][y] instanceof Wood) {
                                    let random = randomIntInclusive(0, 100);
                                    if (random < 5) {
                                        //remove the consumed part from set
                                        pixelList.delete(array[x][y]);
                                        //replace the removed with fire
                                        let fire = new Fire(x, y);
                                        fire.isStable = true;
                                        fire.consumeHp = randomIntInclusive(200, 500);

                                        //insert into lists
                                        array[x][y] = fire;
                                        pixelList.add(fire);
                                    } 
                                }
                            }
                        }
                    }  
                }
            }
        }
        // reduce life
        this.life -= randomIntInclusive(0, 3);
    
        const fallChance = randomIntInclusive(0, 1000);

        if (fallChance < 10)
            this.isStable = false;

        //check if it should kill itself
        if (this.life < 0){
            pixelList.delete(this);
            array[this.x][this.y] = undefined;

            //roll dice for creating smoke when dead
            let random = randomIntInclusive(1, 100);
            if (random == 1) {
                let smoke = new Smoke(this.x, this.y);
                pixelList.add(smoke);
                array[this.x][this.y] = smoke;
            }
        }
    }
}