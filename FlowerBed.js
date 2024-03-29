/*
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false */
const canPlaceFlowers = (flowerBed, n) => {
    let count = 0, i = 0;
    while (i < flowerBed.length) {
        if (
            flowerBed[i] === 0 &&
            (i === 0 || flowerBed[i - 1] === 0) &&
            (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)
        ) {
            flowerBed[i] = 1;
            count++;
        }

        i++;

        if (count >= n) return true;
    }

    return false;
}
