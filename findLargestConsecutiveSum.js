//[1,2,3,4,5,6,7,8,9] => Total Elements = 10
//Count largest sum of consecutive digits
//num = 4
// Sum=25
//conditions
//num > array  => error msg
// 10-4+1
let array = [1, 2, 3, 4, 3,5, 4 , 6,7,8]
num = 4
function findLargestConsecutiveSum(array, num) {
    if (num > array) {
        return "num should not be greater than array"
    }
    else {
        let max = 0
        for (let i = 0; i < array.length - num + 1; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += array[i + j]
            }
            if (temp > max) {
                max = temp
            }

        }
        return max
    }

}
const result = findLargestConsecutiveSum(array, num)
console.log(result)
