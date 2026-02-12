round = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.round(element);
    });
    return arr;
}

ceil = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.ceil(element);
    });
    return arr;
}

floor = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.floor(element);
    });
    return arr;
}


abs = (...args) => {
    arr = []
    args.forEach((element, index) => {
        arr[index] = Math.abs(element);
    });
    return arr;
}


console.log(round(3.2, 4.7, 5.5));
console.log(ceil(3.2, 4.7, 5.5));
console.log(floor(3.2, 4.7, 5.5));
console.log(abs(-3.2, 4.7, -5.5));



const genericOperations = (operation, ...args) => {
    if (operation === 'round') {
        return args.map(num => Math.round(num));
    }
    else if (operation === 'abs') {
        return args.map(num => Math.abs(num));
    }
    else if (operation === 'ceil') {
        return args.map(num => Math.ceil(num));
    }
    else if (operation === 'floor') {
        return args.map(num => Math.floor(num));
    }
    else {
        return "Invalid Operation";
    }
};

console.log(genericOperations('abs', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOperations('ceil', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOperations('floor', 1.3, 2.4, 3.6, 4.2, 5.5));
console.log(genericOperations('round', 1.3, 2.4, 3.6, 4.2, 5.5));