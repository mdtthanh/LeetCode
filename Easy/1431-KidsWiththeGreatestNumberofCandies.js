var kidsWithCandies = function(candies, extraCandies) {
    let result=[]
    let newCandie = candies.map((e) =>e+extraCandies)
    for(let i=0;i<newCandie.length;i++){
        if(newCandie[i]>=Math.max(...candies)){
            result.push(true)
        }
        else{
            result.push(false)
        }
}
  return result  
}