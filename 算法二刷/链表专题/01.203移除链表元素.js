function removeElements(head, val) {
  // 创建一个虚拟头节点
  let dummy = new ListNode(0);
  dummy.next = head;
  // 定义一个指针，指向虚拟头节点
  let cur = dummy;
  // 遍历链表
  while (cur.next !== null) {
    if(cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}