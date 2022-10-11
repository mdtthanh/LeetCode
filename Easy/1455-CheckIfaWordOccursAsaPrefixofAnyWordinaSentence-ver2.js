var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(searchWord) === 0) return i+1
    }
    return -1
};