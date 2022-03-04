S# Single Number
## 문제 이해 
integer 배열 nums. 한 요소 빼고 모든 요소가 두번 들어가 있다. 
그 한 요소를 찾아라 

## 접근 방법
1. (잘못된 접근) 한 요소 pop. 파이썬 in 사용하여 pop한 요소가 남은 배열에 있는지 검사 
true라면 pop 한 요소 return , false 라면 다음 요소 pop
2. set 사용하여 중복을 제거. 기존 list - 중복 제거 list 하면 중복되는 값들만 남음. 
<br>
중복 제거 list - 중복되는 값 = 중복되지 않는 값 나옴
<br>
기본 list : [1,2,2,3,3] , 중복 제거 list : [1,2,3] 


## 핵심

> 중복 없는 list - 중복 되는 값 list 

> list를 중복 없는 list로 만들기 : set(array)



### 해결 코드 

```
class Solution(object):
    def singleNumber(self, nums):
        copy_nums = list(nums); 
        new_nums = list(set(nums)) #nums의 중복값 제거. 단일 요소들만 나옴 
        for i in new_nums:
            copy_nums.remove(i) #nums의 중복되는 값들만 남음 
        result = [j for j in new_nums if j not in copy_nums ] #단일요소 배열 - 중복되는 값 
        return result[0]

```

### 새롭게 알게 된 것 
파이썬 리스트 컴프리헨션
```
result = [j for j in new_nums if j not in copy_nums ] 
```
리스트 내부에 반복문, 조건문 작성 가능