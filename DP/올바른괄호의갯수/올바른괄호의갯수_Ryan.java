class Solution {
    public int solution(int n) {
    if(n < 1 || n > 14)
        return 0;
    if(n == 1)
        return 1;
    int answer = counting(n*2,n,n,0);
    
    return answer;
    }
    public int counting(int t, int o, int c, int s) {
        if(t == 0 && o == 0 && c == 0)
            return 1;
        if(s < 0)
            return 0;
        if( t > 0 && o >= 0 && c>= 0) {
            return counting(t-1, o-1, c, s+1) + counting(t-1, o, c-1, s-1);
        } else {
            return 0;
        }
    }
}