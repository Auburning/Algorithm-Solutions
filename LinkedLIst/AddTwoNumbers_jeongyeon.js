function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
 let curL1 = l1;
 let curL2 = l2;
 // 첫번째 노드
 let firstNode ;
 //더한 값 담을 노드
 let curNode;
 // 올림 유무 
 let raise = false;
 while(culL1 || culL2){
     // Node가 null 일 때 0을 넣어준다. 
     let l1Val = curL1 && curL1.val ? curL1.val : 0;
     let l2Val = curL2 && curL2.val ? curL2.val : 0;
     
     let add = l1Val + l2Val;
     
     if(raise){
         add += 1;
         raise = false;
     }
     
     if(sumNode > 9){
         raise = true;
         sumNode -=10;
     }
     if (!firstNode){
         firstNode = new ListNode(add, null);
         curNode = firstNode;
     }else{
         const newNode = new ListNode(add, null);
         curNode.next = newNode;
         curNode = newNode;
     }
     
     curL1 = curL1 && curL1.next ? curL1.next : null;
     curL2 = curL2 && curL2.next ? curL2.next : null;
     
 }
 
 if(raise){
     curNode.next = new ListNode(1,null);
 }
 return original;
};