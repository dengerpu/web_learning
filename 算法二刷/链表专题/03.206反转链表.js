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
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while(cur){
      let nextNode = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nextNode;
    }
    return pre;
};
// 递归
var reverseList2 = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}