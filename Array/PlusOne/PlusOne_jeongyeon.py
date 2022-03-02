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