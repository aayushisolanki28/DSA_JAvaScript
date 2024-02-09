//String Anagram
//condition
//Check length for both strings
// string will have same set of letters

function isAnagram(string1,string2){
   
    if(string1.length != string2.length){
        return false
    }

    let counter = {}
        for(let letter of string1){
            counter[letter] = (counter[letter] || 0) + 1     
    }
    // console.log(counter)
    for (let item of string2){
        if(!counter[item]){
            return false
        }
        counter[item] -= 1
    }
    return true

}

console.log(isAnagram('hello','llhoe'))
//Alternate method
//return s1.split("").sort().join("") === s2.split("").sort().join("");
