var singleNumber = function(nums) {
    var map = new Object()
    for (n of nums) {
        if (map[n] == undefined) {
            map[n] = true
        }else {
            delete map[n]
        }
    }
    return Object.keys(map)[0]
};