class Enum {
    constructor(index, value) {
        this.index = index
        this.value = value
    }
}

var twoSum = function (nums, target) {
    const enums = []
    nums.forEach((value, index) => {
        enums.push(new Enum(index, value))
    })

    const sorted = enums.sort(function (a, b) {
        return a.value - b.value
    })

    for (let i = sorted.length - 1; i >= 0; i--) {
        let large = sorted[i]
        for (let j = 0; i < sorted.length; j++) {
            let small = sorted[j]
            console.log(small.value, large.value)
            if (large.value + small.value == target) {
                return [small.index, large.index]
            }
            if (large.value + small.value > target) {
                break
            }
        }
    };
}