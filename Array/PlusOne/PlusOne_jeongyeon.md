# PlusOne
## 문제 이해 
배열 digits이 들어온다. 
여기서 각 자리[i]는 정수의 ith 자리.

## 접근 방법
1. 배열 인덱스가 담긴 list [0,1,2,3] 를 생성한다. 
이 리스트를 역순으로 바꾸면 [3,2,1,0] 
<br>list[0] * 10^3 + list[1] * 10^2 + ... 이렇게 더해서 10진수 생성이 가능하다. 


## 핵심

> 배열 인덱스가 담긴 list를 생성하고 이를 역순으로 바꾼다. 10진수 int를 생성한 뒤 string으로 형변환 하여 list에 넣고 return 한다. 



### 해결 코드 

```
class Solution(object):
    def plusOne(self, digits):
        index_list = [i for i in range(0,len(digits))]   # list index의 list만들기
        reversed_list = list(reversed(index_list))
        sum=0   # 10진수로 표현 한 index_list
        cnt=0   # index count위한 변수
        result = [] # 결과값을 담을 list
        for i in digits:       # digit list 를 10진수로 표현하기
            sum+= i*(10**reversed_list[cnt])
            cnt+=1
        sum+=1
        sum = str(sum) # sum + 1 int를 string으로 변환
        for j in sum:
            result.append(j)
        return result

```

### 새롭게 알게 된 것 
파이썬 제곱 수 표현
```
2**10 # 2의 10 승
```
