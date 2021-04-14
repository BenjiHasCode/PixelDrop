class Sand extends Pixel {
    constructor(x, y) {
        const r = 255;
        const g = 165 + randomIntInclusive(0, 50);
        const b = randomIntInclusive(0, 50);
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, false, rgb, 2);
    }
}