/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length == 1) // return when length is 1 (One and single element)
        return nums[0];
    nums.sort();  // sort Array
    for(let i = 0; i < nums.length;) { // compare sorted elements
        if(nums[i] == nums[i+1]) // if it is not single number, pass that pair.
            i = i + 2;
        else{ // return it, if it's single number
            return nums[i];
        }
    }
};
