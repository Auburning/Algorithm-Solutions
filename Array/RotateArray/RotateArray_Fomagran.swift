func rotate(_ nums: inout [Int], _ k: Int) {
    if nums.count == 1 { return }
    let k = k >= nums.count ? k-nums.count*(k/nums.count) : k
    let pivot:Int = nums.count-k-1
    let front:[Int] = Array(nums[0...pivot])
    let back:[Int] = Array(nums[pivot+1..<nums.count])
    nums = back + front
}