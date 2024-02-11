// cehcking the sqaure of array one is prsent in another array or not

// arr1= [1,2,3,4] 
// arr2 = [1,4,9,16] //case 1
arr1= [1,2,4,2]
arr2 = [1,4,4,16] //case 2
function checkSqaure(arr1,arr2){
map1 ={}
map2= {}
for(i of arr1){ // n times
    map1[i] = (map1[i] || 0)+1
}
for(i of arr2){ // n times
    map2[i] = (map2[i] || 0)+1
}
//taking key from map 1
for(let key in map1){ // n times
    //checking the sqaure is present in object ot not
    if(!map2[key*key]){
        return false
    }
    //Values compare
    if(map1[key] !== map2[key*key] ){
        return false
    }
}
return true
}
console.log(checkSqaure(arr1,arr2))
// time complexity O(n)



