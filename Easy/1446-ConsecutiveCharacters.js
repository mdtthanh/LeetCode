var maxPower = function(s) {
    let count = 1
    let max = 1
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
            count++
        } else {
            max = max > count ? max : count
            count = 1
        }
    }
    return max
};