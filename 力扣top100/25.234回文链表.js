/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let res = [];
  let p = head;
  while(p) {
      res.push(p.val);
      p = p.next;
  }
  let length = res.length;
  for(let i = 0; i < Math.floor(length / 2) ; i++) {
      if(res[i] != res[length - i - 1]) {
          return false;
      }
  }
  return true;
};