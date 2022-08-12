var shuffle = function(nums, n) {
    var res = []
    for(var i = 0; i < n; i++){
        res.push(nums[i], nums[i+n])
    }
    return res
};

// var shuffle = function(nums, n) {
//     var res = []
//     for(var i = 0; i < n; i++){
//         res[i*2] = nums[i]
//         res[i*2 + 1] = nums[n + i]
//     }
//     return res
// };