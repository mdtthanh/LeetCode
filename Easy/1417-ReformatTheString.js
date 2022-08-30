var reformat = function(s) {
    let digit = s.split('').filter(item => item >= '0' && item <= '9');
    let alpha = s.split('').filter(item => !(item >= '0' && item <= '9'));
    if(Math.abs(digit.length - alpha.length) > 1)
        return '';
    if(alpha.length > digit.length){
        let temp = alpha;
        alpha = digit;
        digit = temp;
    }
    let arr = [];
    while(digit.length > 0 || alpha.length > 0){
        if(digit.length > 0)
            arr.push(digit.shift());
        if(alpha.length > 0)
            arr.push(alpha.shift());
    }
    return arr.join('');
};