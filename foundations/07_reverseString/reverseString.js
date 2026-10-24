const reverseString = function(string) {
return string.split("").reverse().join("");
};

const reverseString = function(string) {
    let stringsplit = string.split("");
    let stringsreverse = stringsplit.reverse();
    let joinstring = stringsreverse.join("");
    return joinstring
}



// Do not edit below this line
module.exports = reverseString;
