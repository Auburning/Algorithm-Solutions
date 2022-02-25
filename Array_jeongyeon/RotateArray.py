class Solution(object):
    def rotate(self, nums, k):
        copy_nums = list(nums)
        for i in range(0,len(nums)):
            if i+k >= len(nums):
                j = i-(k+1)
                nums[j] = copy_nums[i]
            else:
                j = i+k
                nums[j] = copy_nums[i]