/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let cur = digits.length - 1;
    for(let i = cur; i < digits.length; i--) {
        if(digits[i] == 9 && i === 0) { // if first digit is 9, add the element(1) at the beginning of an array and return it
            digits[i] = 0;
            digits = [1, ...digits];
            break;
        } else if(digits[i] == 9) { // if elements is 9, change it to 0 and move to next digit
            digits[i] = 0;
        } else { // plus one and return
            digits[i] += 1;
            break;
        }
    }
    
    return digits;
};
