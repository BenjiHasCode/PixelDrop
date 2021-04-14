class Wood extends Pixel {
    constructor(x, y) {
        const r = 210;
        const g = 105;
        const b = 30;
        const rgb = `rgb(${r},${g},${b})`;

        super(x, y, true, rgb, 10);
    }
}