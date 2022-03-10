func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
    var isOver10 = 0
    var sum = getSum(v1: l1!.val, v2: l2!.val, isOver10: &isOver10)
    var node:ListNode = ListNode(sum)
    let root = node
    var l1:ListNode? = l1?.next
    var l2:ListNode? = l2?.next
    
    while l1 != nil || l2 != nil {
        sum = getSum(v1: l1?.val ?? 0, v2: l2?.val ?? 0, isOver10: &isOver10)
        l1 = l1?.next
        l2 = l2?.next
        node.next = ListNode(sum)
        node = node.next!
    }
    if isOver10 == 1 {
        node.next = ListNode(1)
    }
    return root
}

func getSum(v1:Int,v2:Int,isOver10:inout Int) -> Int {
    let sum = (v1+v2+isOver10)
    isOver10 = sum >= 10 ? 1 : 0
    return sum%10
}