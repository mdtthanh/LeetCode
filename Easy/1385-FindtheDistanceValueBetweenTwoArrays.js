var findTheDistanceValue = function(arr1, arr2, d) {
    
let res = 0;
arr2.sort(function(a, b){ return a - b});

for (let i = 0; i < arr1.length; i++){
    let f = 0;
    for (let j = 0; j < arr2.length; j++){
        if (Math.abs(arr2[j] - arr1[i]) <= d){
            f = 1;
        }
    }
    if (f != 1){ res++; }
}

return res;

};