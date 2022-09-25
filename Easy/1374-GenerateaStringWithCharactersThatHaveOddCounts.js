var generateTheString = function(n) {
    let result = ""
    if(n%2){
        for(let i = 0; i < n; i++){
            result += 'p'
        }
    } else {
        for(let i = 0; i < n - 1; i++){
            result += 'p'
        }
            result += 'a'
    }
    return result
};