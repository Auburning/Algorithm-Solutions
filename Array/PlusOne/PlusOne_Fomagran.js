var plusOne = function(digits) {
    let answer = digits
    let last = []
    for (let i = digits.length-1; i >= 0; i--) {
        last = [i,digits[i]]
        console.log(answer[i])
        answer[i] = answer[i] != 9 ? answer[i] + 1 : 0
        if (answer[i] != 0) break
    }
    if (last[0] == 0 && last[1] == 9) {
        answer.splice(0,0,1)
    }
    return answer
}