let rotate = function(nums, k) {
    if (nums.length == 1) return
    let K = k >= nums.length ? k-nums.length*(Math.floor(k/nums.length)) : k
    let pivot = nums.length-K-1
    let back = nums.splice(0,pivot+1)
    nums.push(...back)
    return nums
};