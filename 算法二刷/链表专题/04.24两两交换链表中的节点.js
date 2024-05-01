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
var swapPairs = function(head) {
  if(head == null || head.next == null) return head;
  // 虚拟头结点。
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while(curr != null && curr.next != null) {
    let nextNode = curr.next;
    prev.next = nextNode;
    curr.next = nextNode.next;
    nextNode.next = curr;
    
    prev = curr;
    curr = curr.next;
  }
  return dummy.next;
};