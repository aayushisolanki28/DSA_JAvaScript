// var lengthOfLastWord = function (s) {
//     arr = s.trim()
//     str = ""
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === ' ') {
//             break;
//         }
//         str = str+ arr[i];
//     }
//         return str   
// };
var lengthOfLastWord = function(s) {
  var str = s.trim();
  var len = str.length;
  var i = len - 1;
  while (i >= 0 && str[i] !== ' ') i--;
  return len - 1 - i;
};
