var sortByBits = function(arr) {
    let n = arr.length, res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        res[i] = countBitOne(arr[i])*10001 + arr[i];
    }

    res.sort((a,b) => a - b);
    for (let i = 0; i < n; i++) {
        res[i] %= 10001;
    }

    return res;
};

function countBitOne(n) {
    let res = 0;
    while (n !== 0) {
        res += (n & 1);
        n >>= 1;
    }
    return res;
}