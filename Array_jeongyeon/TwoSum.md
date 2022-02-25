
# LeetCode
- TwoSum
  -  <https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/> 

### 문제 이해하기
배열 nums와 target이 주어진다. 
nums 요소 중 2개를 더하면 target 값과 일치한다.
이때 nums 의 두 요소를 출력한다. 
(답은 오직 한쌍만 존재. 한 요소를 중복해서 사용할 수 없다.)

### 문제 접근 방법
1. 우선 생각나는대로 풀어봤다
- 0~4번까지의 요소가 있다면 for문을 중첩하여 두개 만든다.
```
for i in range(0,len(nums)):
    for j in range(i+1,len(nums)):
        sum = nums[i]+nums[j] 
        if sum == target :
            return [i , j]
    
```
2. 풀이 찾아보고 이해하기

### 구현 배경 지식
간단한 파이썬 문법
### 접근 방법을 적용한 코드
```
```
### 해결하지 못한 이유

### 문제를 해결한 코드
```
class Solution(object):
    def twoSum( self,nums, target):
        for i in range(0,len(nums)):
            for j in range(i+1,len(nums)):
                sum = nums[i]+nums[j] 
                if sum == target :
                    return [i,j]
```

### 문제를 해결한 방법
일단 처음 생각 난 대로 풀어서 해결했다.