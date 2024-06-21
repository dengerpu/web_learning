/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针
// var removeNthFromEnd = function(head, n) {
//   let dummy = new ListNode(0, head);
//   let slow = dummy;
//   let fast = dummy;
//   for(let i = 0; i < n; i++) {
//     fast = fast.next;
//   }
  
//   while(fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
  
//   slow.next = slow.next.next;
//   return dummy.next;
// };

var removeNthFromEnd = function(head, n) {
  let curr = head;
  let stack = [];
  while(curr) {
    stack.push(curr);
    curr = curr.next;
  }
  for(let i = 0; i < n; i++) {
    stack.pop();
  }
  if(stack.length === 0) {
    return head.next;
  } else {
    let prev = stack.pop();
    prev.next = prev.next.next;
    return head;
  }
}