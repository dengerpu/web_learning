/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 哈希集合法
var hasCycle = function(head) {
  if(head == null || head.next == null) return false;
  let p = head;
  let set = new Set();
  while(p) {
      if(set.has(p)) {
          return true;
      }
      set.add(p);
      p = p.next;
  } 
  return false;
};
// 快慢指针
var hasCycle = function(head) {
  if(head == null || head.next == null) return false;
  let slow = head;
  let fast = head.next.next;
  while(fast && fast.next) {
      if (slow === fast) {
          return true;
      }
      slow = slow.next;
      fast = fast.next.next;
  }
  return false;
}