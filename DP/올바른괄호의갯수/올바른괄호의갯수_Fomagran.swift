func solution(_ n:Int) -> Int {
    if n <= 2 { return n}
    var dp:[Int] = Array(repeating: 0, count: n+1)
    dp[0] = 1
    dp[1] = 1

    for i in 2...n {
        for j in 1...i/2 {
            dp[i] += dp[j-1] * dp[i-j]
        }
        dp[i] = i%2 == 0 ? dp[i]*2 : dp[i]*2+dp[i/2]*dp[i/2]
    }
    return dp.last!
}