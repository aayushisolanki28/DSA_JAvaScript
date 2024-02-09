// nums =[1,1,2,3,4,5,6,4,5,6,7]
// arr=[]
// if(nums.length> 0){
// for( let i of nums){
//     if(arr.indexOf(i) == -1){
//         arr.push(i)
//     }
// }
// console.log(arr+ "length is: "+arr.length)
// }
// else{
//     console.log("Array is empty")
// }

function countUnique(numArr) {
    let map = {};
    for (let num of numArr) {
      map[num] = (map[num] || 0) + 1;
    }
    //console.log(map)
    return Object.keys(map).length;

  }
  
  const count = countUnique([
    9, 9, 9, 1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9,
  ]);
  console.log(count);
