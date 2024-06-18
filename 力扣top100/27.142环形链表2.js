/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 哈希表
// var detectCycle = function(head) {
//     if(head == null || head.next == null) return null;
//     let set = new Set();
//     let p = head;
//     while(p) {
//         if(set.has(p)) {
//             return p;
//         }
//         set.add(p);
//         p = p.next;
//     }
//     return null;
// };

// 双指针法
var detectCycle = function(head) {
  if(head == null || head.next == null) return null;
  let slow = head, fast = head;
  while(fast) {
      slow = slow.next;
      if(fast.next != null) {
          fast = fast.next.next;
      } else {
          return null;
      }
      if(slow == fast) { // 两者相交，但这个交点不一定是环形链表的入口
          let p = head;
          while(p != slow) {
              p = p.next;
              slow = slow.next
          }
          return p;
      } 
  }
  return null;
};