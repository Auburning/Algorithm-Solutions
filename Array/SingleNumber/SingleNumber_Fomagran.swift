func singleNumber(_ nums: [Int]) -> Int {
    var dic:[Int:Bool] = [:]
    for n in nums {
        dic[n] = dic[n] == nil ? true : nil
    }
    return dic.keys.first!
  }