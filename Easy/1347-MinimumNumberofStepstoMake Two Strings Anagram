var checkIfExist = function(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) return true
        else {
            map.set(arr[i]*2, arr[i])
            map.set(arr[i]/2, arr[i])
        }
    }
    return false;
};