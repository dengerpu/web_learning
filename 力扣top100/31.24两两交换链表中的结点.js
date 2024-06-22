/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function(head) {
//     let dumpy = new ListNode(0, null);
//     dumpy.next = head;
//     let prev = dumpy, curr = head;
//     while(curr && curr.next) {
//         let temp = curr.next.next;
//         let next = curr.next;
//         prev.next = next;
//         next.next = curr;
//         curr.next = temp;
//         prev = curr;
//         curr = temp;
//     }
//     return dumpy.next;
// };
var swapPairs = function(head) {
  if(head == null || head.next == null) {
      return head;
  }
  let newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};