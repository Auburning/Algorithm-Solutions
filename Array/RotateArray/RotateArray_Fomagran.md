# Rotate Array

## 핵심

> 전체 배열의 끝에서부터 k만큼을 뒤집은 것과 마찬가지다.  
> 단, 전체 배열의 사이즈가 1이면 자체를 반환하고  
> k가 전체 배열의 사이즈 보다 크다면 k-배열의 크기*(k/배열의 크기)로 계산 하면 된다.

### 1. nums의 길이에서 k+1을 빼준 것을 기준으로 잘라준다.

```swift
let pivot:Int = nums.count-k-1
let front:[Int] = Array(nums[0...pivot])
let back:[Int] = Array(nums[pivot+1..<nums.count])
```

2. 나눈 배열의 앞과 뒤를 서로 바꾼다.

```swift
nums = back + front
```

### *edge1 만약 nums의 길이가 1이라면 위의 식을 세울 수 없으므로 nums를 반환.

```swift
if nums.count == 1 { return }
```

### *edge2 만약 k가 nums의 길이보다 크다면 k를 nums의 길이로 나눈 값을 nums의 길이에 곱한 값을 k에서 빼준 것을 k로 바꾼다.

```swift
let k = k >= nums.count ? k-nums.count*(k/nums.count) : k
```