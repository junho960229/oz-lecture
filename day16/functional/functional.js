function add(a, b) {
    return a + b;
}

const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3)); //5

function addTotal(add1, add2) {
    return add1() + add2();
}
addTotal(add(1, 2), add(3, 4));

