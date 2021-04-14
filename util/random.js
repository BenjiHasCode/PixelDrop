function randomIntExclusive(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}