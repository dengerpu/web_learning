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
 var detectCycle = function(head) {
  if(head == null || head.next == null) return null;
  let set = new Set();
  let p = head;
  while(p) {
      if(set.has(p)) {
          return p;
      }
      set.add(p);
      p = p.next;
  }
  return null;
};