/*Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i. */
var countBits = function (n) {
    const res = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        res[i] = res[Math.floor(i / 2)] + (i % 2);
    }
    return res

};
//Input: n = 2 ,Output: [0,1,1]
res= countBits(n)
console.log(res)
