# SingleNumber

# 핵심

> array에서 중복되지 않는 하나의 수를 찾는다.
> 정렬을 한 뒤 바로 옆 element와 값이 같은지 비교한다. 

###1. Array 길이가 1 이라면 그 숫자를 return 한다.

```js
    if(nums.length == 1) // return when length is 1 (One and single element)
        return nums[0];
```

###2. Array를 정렬한 뒤 옆 element와 값을 비교한다.

Array에 중복 값의 갯수는 2개로 한정된다.
해당 element와 옆 element가 중복되지 않는다면 해당 element를 return 한다.

```js
    nums.sort();  // sort Array
    for(let i = 0; i < nums.length;) { // compare sorted elements
        if(nums[i] == nums[i+1]) // if it is not single number, pass that pair.
            i = i + 2;
        else{ // return it, if it's single number
            return nums[i];
        }
    }
```
