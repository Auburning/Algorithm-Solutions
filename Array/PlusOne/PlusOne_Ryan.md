# PlusOne

# 핵심

> Array의 각 element는 숫자의 자릿수로 구성되어있다(each array[i] is th i^th digit of the integer).
> 1을 더할때 받아올림(regroup)의 여부를 잘 확인한다.
> 가장 큰 자릿수가 올림을 받았을때 10이 되는지 여부(자릿수가 늘어나는지 여부)를 잘 확인한다.


### 1. digits(given array)의 가장 끝 부분(1의 자리)부터 for loop 을 시작한다.

```js
   for(let i = digits.length-1; i < digits.length; i--)
```

### 2. 현재 가리키고있는 element가 9고 가장 큰 자릿수일 경우

해당 element를 0으로 바꾸고 1을 unswift 시킨 뒤 break 한다.

```js
        if(digits[i] == 9 && i === 0) { // if first digit is 9, add the element(1) at the beginning of an array and return it
            digits[i] = 0;
            digits = [1, ...digits];
            break;
        }
```

### 3. 현재 가리키고있는 element가 9고 가장 큰 자릿수가 아닐 경우

해당 element를 0으로 바꾸고 한자리 위로 이동한다.

```js
          else if(digits[i] == 9) { // if elements is 9, change it to 0 and move to next digit
            digits[i] = 0;
          }
```

### 4. 현재 가리키고있는 element가 9가 아닐 경우

해당 자릿수에 1을 더해주고 break 한다.

```js
          else { // plus one and return
            digits[i] += 1;
            break;
        }
```

### 5. 현재 가리키고있는 element가 9가 아닐 경우

해당 자릿수에 1을 더해주고 break 한다.

```js
          else { // plus one and return
            digits[i] += 1;
            break;
        }
```

### 6. 완성된 array를 return 한다

```js
    return digits;
```
