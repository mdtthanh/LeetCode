var buildArray = function(target, n) {
    let result = [];
    let i = 0;

    for(let j = 1;  j <= n; j++ ){
        if(target[i] == j){
            result.push('Push')
            i++;
            if(i == target.length){
                break;
            } 
        } else {
            result.push('Push','Pop')
        }       
    }

    return result
};