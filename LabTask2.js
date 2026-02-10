function SolveThis(obj) {
    let res = {};

    for (let key in obj) {
        let arr = obj[key];

        switch (key) {
            case "sum":
                res[key] = arr.reduce((a, b) => a + b, 0);
                break;

            case "min":
                res[key] = Math.min(...arr);
                break;

            case "max":
                res[key] = Math.max(...arr);
                break;

            case "round":
                res[key] = arr.map(num => Math.round(num));
                break;

            case "ceil":
                res[key] = arr.map(num => Math.ceil(num));
                break;

            case "floor":
                res[key] = arr.map(num => Math.floor(num));
                break;

            case "abs":
                res[key] = arr.map(num => Math.abs(num));
                break;

            case "random":
                res[key] = Math.random();
                break;

            default:
                res[key] = "Invalid Operation";
        }
    }

    return res;
}
console.log(
    SolveThis({
        sum: [3, 2, 4],
        max: [2, 4, 3, 5],
        min: [5, 3, 4, 3]
    })
);
