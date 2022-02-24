# TwoSum Solution

### 1. 주어진 숫자들을 오름차순 정렬한다.
 
단, 숫자들이 몇 번째인지 알아야 하기 때문에 enumerated를 진행하여 index와 함께 정렬한다.

```swift
let map = nums.enumerated().map{$0}
let sorted = map.sorted{$0.element <  $1.element}
```

### 2. 오름차순한 배열을 이용해 가장 큰 숫자부터 차례로 작은 숫자를 더해 target이 있는지 찾는다.
 
sorted를 뒤집어 reversed를 만들어 차례로 가장 큰 숫자부터 순회하게 한다.

```swift
let reversed = sorted.reversed()
for large in reversed { ... }
```

그 다음 for문으로 가장 작은 숫자부터 차례대로 더해나간다.

만약 작은 숫자와 큰 숫자를 더 했을 때 target이 된다면 정답이므로 숫자의 index를 배열에 담아 반환한다.

만약 작은 숫자와 큰 숫자를 더 했는데 target보다 크다면 정답이 될 수 없으므로 다음 큰 숫자로 넘어간다.

```swift
for large in reversed {
        for small in sorted {
            if large.element + small.element == target {
                return [small.offset,large.offset]
            }
            if large.element + small.element > target {
                break
            }
        }
    }
```

