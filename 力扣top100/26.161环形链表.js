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