var luckyNumbers  = function(matrix) {
    const result = []; 
    for(let row = 0; row < matrix.length; row++){
        const min = Math.min(...matrix[row])
        const index = matrix[row].indexOf(min)
        const colValues = []
        for(let col = 0; col < matrix.length; col++){
            colValues.push(matrix[col][index])
        }
        if(min === Math.max(...colValues)) result.push(min)
    }
    return result;
}