# SingleNumber

# 핵심

> 한 개만 존재하는 숫자를 찾아내는 것이므로,  
> 딕셔너리를 이용하여 숫자가 없다면 저장, 이미 있다면 삭제해주는 형식으로  
> 마지막에 남는 숫자를 반환한다.

1. 딕셔너리를 만들어 해당 값이 이전에 있었는지 확인한다.
 
키값을 숫자로 밸류값을 불린으로 표시한다.

만약 딕셔너리에 숫자 키를 넣었는데 존재한다면 이미 한번 나왔던 숫자이므로 nil로 바꿔주고 아니라면 숫자를 넣어준다.
 
```swift
    var dic:[Int:Bool] = [:]
    for n in nums {
        dic[n] = dic[n] == nil ? true : nil
    }
```

2. 딕셔너리 안에 남아있는 키값을 반환한다.
 
문제에 무조건 숫자가 두 개씩 있으며 한 숫자만 한 개 존재한다고 했으니 딕셔너리엔 하나의 숫자만 남을 것이다.

```swift
 return dic.keys.first!
```