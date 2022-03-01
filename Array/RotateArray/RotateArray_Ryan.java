class Solution {
    public void rotate(int[] nums, int k) {
        int len = nums.length;
        k = k % len;
        int[] result = new int[len];
        
        for (int i = 0; i < len; i++) {
            if (len-k >= len) {
                result[i] = nums[-k];
            } else {
                result[i] = nums[len-k];
            }
            k--;
        }
        for (int i = 0; i < len; i++) {
            nums[i] = result[i];
        }
    }
}
