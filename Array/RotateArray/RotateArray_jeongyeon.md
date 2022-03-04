# LeetCode
- RotateArray
  -  <https://leetcode.com/problems/rotate-array/> 

### 문제 이해하기
배열 nums와 상수 k가 주어진다. 
배열 nunms들은 상수 k만큼 우측으로 당겨진다.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

### 문제 접근 방법
1. 생각나는대로 
- 위의 예시로 풀어보자 
우선 nums와 같은 길이만큼의 빈 배열을 만든다. 
자신의 index + k 했을 때 배열의 최대 index 길이를 넘어선다면 
index - (k+1) 해준다. 
자신의 index + k 했을 때 배열의 최대 index 길이를 넘어서지 않는다면
index + (k) 해준다

```
int j 
null_list = [0 for i in range(n)]
for i in range(0,7):
    if i+k > len(nums):
        j = i-(k+1)
    else:
        j = i+k
    null_list[j] = nums[i]
```
```
class Solution(object):
    def rotate( nums, k):
        null_list = [0 for i in range(len(nums))]
        for i in range(0,len(nums)):
            if i+k >= len(nums):
                j = i-(k+1)
                null_list[j] = nums[i]
            else:
                j = i+k
                null_list[j] = nums[i]
        return null_list
```
- 잘못생각했다. 문제의 rtype: None Do not return anything, modify nums in-place instead. 을 읽지 못했다.. 
어떻게 구현해야하지 ?? 


### 구현 배경 지식
- 파이썬 길이가 정해진 0으로 초기화 된 배열 만들기
```
list = [0 for i in range(n)]
```
- 배열의 길이 구할 때 len 함수 사용하기 
```
len(array)
```
리스트 복사하기
```
list.copy() 혹은 list(a)
```
### 접근 방법을 적용한 코드
```
```
### 해결하지 못한 이유

### 문제를 해결한 코드
```
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
```

### 문제를 해결한 방법
처음 생각 난 대로 풀어서 해결했다.
좀 더 좋은 방법이 있을 것 같다 찾아보자 