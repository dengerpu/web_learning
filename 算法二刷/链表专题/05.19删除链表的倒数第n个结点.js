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
var removeNthFromEnd = function(head, n) {
  // 双指针思想
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let curr = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    curr = curr.next;
    fast = fast.next;
  }
  curr.next = curr.next.next;
  return dummy.next;
};