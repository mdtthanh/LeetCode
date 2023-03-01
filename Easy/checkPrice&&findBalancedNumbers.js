var checkPrice = function (price) {
    price = [22, 16, 8, 2, 14]
    let result = []
    let resultMin
    for (let i = 0; i < price.length; i++) {
        for (let j = i + 1; j < price.length; j++) {
            if (price[i] > price[j]) {
                result.push(price[i] - price[j]);
            }
            else if (price[i] < price[j]) continue
        }
    }
    resultMin = Math.min(...result)
    return resultMin
}


function findBalancedNumbers(arr) {
    let balancedNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0, rightSum = 0;
        // tính tổng các số bên trái của phần tử thứ i
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        // tính tổng các số bên phải của phần tử thứ i
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }
        // nếu tổng các số bên trái bằng tổng các số bên phải, thêm phần tử đó vào mảng số cân bằng
        if (leftSum === rightSum) {
            balancedNumbers.push(arr[i]);
        }
    }
    return balancedNumbers.length > 0 ? 'YES' : 'NO'
}
let arr = [3, 7, 8, 10]
let result = findBalancedNumbers(arr)

console.log(result)