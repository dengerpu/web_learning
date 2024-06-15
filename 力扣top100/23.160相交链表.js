/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) {
      return null;
  }
  let pA = headA, pB = headB;
  while(pA != pB) {
      if(pA === null) {
          pA = headB;
      } else {
          pA = pA.next;
      }
      pB === null ? pB = headA : pB = pB.next;
  }
  // 即使不相交，最后也都会为null
  return pA;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 // 利用哈希集合来存储
 var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) {
      return null;
  }
  let set = new Set();
  let p = headA;
  while(p) {
      set.add(p);
      p = p.next;
  }
  p = headB;
  while(p) {
      if(set.has(p)) {
          return p;
      }
      p = p.next;
  }
  return null;
};