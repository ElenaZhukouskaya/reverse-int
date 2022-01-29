module.exports = function reverse(n) {
    const revInt = Math.abs(n).toString().split("").reverse().join("");
    return +revInt;
};
