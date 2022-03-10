
# LeetCode
- Longest Substring Without Repeating Characters
  -  <https://leetcode.com/problems/longest-substring-without-repeating-characters/> 

### 문제 이해하기
배열 s를 입력 받는다. s 중에서 길이가 가장 긴 중복 없는 substring을 찾는다. 
ex)  Input: s = "abcabcbb",<br/> Explanation: The answer is "abc", with the length of 3.

### 문제 접근 방법
- 처음 풀 때 
1. 빈 list를 생성한다.
2. string을 순회하면서 빈 list에 넣는다. 
3. 새롭게 넣을 요소가 이미 list안에 있다면 넣기 중단. 그 list를 a에 저장
4. 배열 끝까지 돌때까지 반복. 새로운 list가 생기면 a와 길이 비교, list의 길이가 더 길면 result에 list 저장. 
5. a의 길이를 반환 
 
![image](https://user-images.githubusercontent.com/64348346/157381616-582f9c13-d518-489a-b744-7f32fca3ae62.png)
 


### 구현 배경 지식
- indexOf()
object.indexOf(i) 했을 때 object에 i가 있다면 0 반환, 없다면 -1반환


### 접근 방법을 적용한 코드

### 해결하지 못한 이유
1. s의 길이가 1일 경우를 생각하지 못함.
![image](https://user-images.githubusercontent.com/64348346/156952720-46d1c36a-9a3b-4200-8609-f40f7bc44eba.png)
- 해결방안 
    - trim() 사용하여 처음 s를 받았을때 공백 제거하기?
    - 안됨 문제 조건에 <br/>s consists of English letters, digits, symbols and spaces. 가 있었음. 문제조건 꼼꼼히 읽자

2. else처리 되지 않고 if에서만 문자열이 끝났을 때를 생각하지 못함
![image](https://user-images.githubusercontent.com/64348346/156956105-1e2ab9cf-145d-4541-abb5-f1aff810cf86.png)
![image](https://user-images.githubusercontent.com/64348346/156956364-c4196ef0-ba9e-41b8-9ebb-6a84c31592e1.png)

다시 풀었음 

### 문제를 해결한 코드

```javascript
var lengthOfLongestSubstring = function(s) {
    let result=0;
    let sum ='';
    for (let i=0; i<s.length; i++){
        let sum = s[i];
        if(s.length == 1) return 1;
        if(i != s.length-1){
            for (let j=i+1; j< s.length ; j++){
                if(sum.indexOf(s[j]) == -1){
                    sum+=s[j];
                }
                else break;
            }
            if(sum.length > result) result = sum.length;
        }
    }
    return result;
};
```

### 문제를 해결한 방법

### 새롭게 알게 된 알고리즘 sliding window
[슬라이딩 윈도우(Sliding Window)](https://velog.io/@zwon/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9-%EC%9C%88%EB%8F%84%EC%9A%B0Sliding-Window)