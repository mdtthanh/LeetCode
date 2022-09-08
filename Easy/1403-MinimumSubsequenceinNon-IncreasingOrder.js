var minSubsequence = function(nums) {
    let sum = 0
    let temp = 0
    let result = []
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    nums.sort((a, b)=>b-a);
    for(let i = 0; i< nums.length; i++){
        result.push(nums[i])
        temp += nums[i]
        if(temp > (sum-temp)){
            break
        }
    }
    return result;
    
};