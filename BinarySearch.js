function BSsearch(arr){
search = 12
min =0 ;
max= arr.length -1
while(min<=max){
    mid= (min+max)/2
if(arr[mid] == search){
    return mid
}
else if(arr[mid]<search){
    min= mid+1
}
else{
    max = mid-1
}
}
}
console.log(BSsearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
