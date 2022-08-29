var maxScore = function(s) {
    let sumRight = 0
    let sumLeft = 0
    let result = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == '1'){
            sumRight++
        }
    }
    
    for(let i = 0; i < s.length - 1; i++){
            if(s[i] == '0'){
                sumLeft++
            }
            else{
                sumRight--
            }
        if((sumLeft + sumRight) > result){
            result = sumLeft + sumRight
        }

    }
    return result
        
    
};