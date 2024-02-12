// Input: n = 2
// Output: 2
var climbStairs = function (n) {
     a = 1, b = 1, c = 0;

        for(let i=2;i<=n;i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
};
