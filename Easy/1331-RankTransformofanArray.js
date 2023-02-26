var arrayRankTransform = function (arr) {
    var map = new Map();
    [...new Set(arr)].sort((a, b) => a - b).map((x, i) => map.set(x, i + 1));
    return arr.map((x) => map.get(x));
};