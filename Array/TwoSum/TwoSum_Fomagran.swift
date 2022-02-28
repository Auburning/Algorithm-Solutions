func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
    let map = nums.enumerated().map{$0}
    let sorted = map.sorted{$0.element <  $1.element}
    let reversed = sorted.reversed()
    for large in reversed {
        for small in sorted {
            if large.element + small.element == target {
                return [small.offset,large.offset]
            }
            if large.element + small.element > target {
                break
            }
        }
    }
    return []
}