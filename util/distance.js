//calculates distance using pythagoras
// d = Sqrt((x1 - x2)^2 + (y1 - y2)^2)
function calculateDistance(x1, y1, x2, y2) {
    const xSum = x1 - x2;
    const ySum = y1 - y2;
    const xPow = Math.pow(xSum, 2);
    const yPow = Math.pow(ySum, 2);
    return Math.sqrt(xPow + yPow);
}