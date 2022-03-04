# PlusOne

# 핵심

> 전체 배열 가장 마지막에 +1을 하는데, 가장 끝에서부터 9가 얼마나  
> 이어져 있는지 체크한 뒤 변환해준다.


### 1. digits의 끝에서부터 숫자가 9인지 아닌지 체크한다.
 

9가 아닌 경우 해당 숫자를 +1을 해주고 9인 경우 해당 숫자를 0으로 바꾸고 바로 앞 숫자에 +1을 해준다.

 
``` swift
    var answer:[Int] = digits
    var last:(Int,Int) = (0,0)

    for i in stride(from: digits.count-1, through: 0, by: -1) {
        last = (i,digits[i])
        answer[i] = answer[i] != 9 ? answer[i] + 1 : 0
        if answer[i] != 0 { break }
    }
```

### 2. 만약 9가 0번째 인덱스까지 이어져 있다면 1을 가장 첫 번째에 삽입한다.
 

999라면 0번째까지 9가 이어져 있는 경우입니다.

여기서 +1을 해주면 1000이 되기 때문에 가장 첫 번째에 삽입해 주어햐 합니다.

```swift
   return last == (0,9) ? [1] + answer : answer
```