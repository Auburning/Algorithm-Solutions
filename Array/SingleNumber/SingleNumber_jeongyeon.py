class Solution(object):
    def singleNumber(self, nums):
        copy_nums = list(nums); 
        new_nums = list(set(nums)) #nums의 중복값 제거. 단일 요소들만 나옴 
        for i in new_nums:
            copy_nums.remove(i) #nums의 중복되는 값들만 남음 
        result = [j for j in new_nums if j not in copy_nums ] #단일요소 배열 - 중복되는 값 
        return result[0]
