var findLucky = function(arr) {
    let result = []
    let max = -1
    for(let i = 0; i < arr.length; i++){
        result = arr.filter(x=>x==arr[i])
            if(arr[i] == result.length){
                max = Math.max(max, arr[i])
            }
    }
    return max
    
};