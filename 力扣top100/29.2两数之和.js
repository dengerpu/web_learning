/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if(l1 == null) return l2;
  if(l2 == null) return l1;
  let head = new ListNode(0, null);
  let curr = head;
  let prev = 0;
  while(l1 != null || l2 != null) {
      let sum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + prev;
      let node = new ListNode(sum % 10);
      curr.next = node;
      curr = node;
      prev = Math.floor(sum / 10);
      if(l1) {
          l1 = l1.next;
      }
      if(l2) {
          l2=l2.next;
      }
  }
  if(prev > 0) {
      curr.next = new ListNode(prev)
  }
  return head.next;
};