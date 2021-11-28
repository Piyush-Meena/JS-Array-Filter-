function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [10, 1, 5]
