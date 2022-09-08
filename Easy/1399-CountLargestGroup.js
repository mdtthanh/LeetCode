// Approach 1: modulo 9 arithmetic
const sumDigit01 = (n) => {
  return (n - 1) % 9 + 1;
}

// Approach 2: numerical operations
const sumDigit02 = (n) => {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  
  return sum;
}

var countLargestGroup = function(n) {
  const map = new Map();
  let max = 0;
  for (let i = 1; i <= n; i++) {    
    const sum = sumDigit02(i);
    
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    
    max = Math.max(map.get(sum), max);
  }
  
  let count = 0;
  for (let value of map.values()) {
    if (max === value)
      count++;
  }
  
  return count;
};