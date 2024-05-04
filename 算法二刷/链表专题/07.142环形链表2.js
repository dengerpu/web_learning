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
var detectCycle = function(head) {
    let map = new Map();
    let curr = head;
    while(curr){
        if(map.has(curr)){
            return curr;
        }
        map.set(curr,1);
        curr = curr.next;
    }
    return null;
};

// 快慢指针
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
         let index1 = head;
         let index2 = fast;
         while(index1 !== index2){
             index1 = index1.next;
             index2 = index2.next;
         }
         return index1;
      }
  }
  return null;
}