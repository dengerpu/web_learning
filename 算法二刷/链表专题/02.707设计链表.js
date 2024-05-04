
var MyLinkedList = function() {
  this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let cur = this.head;
  for(let i = 0; i < index && curr; i++){
    cur = cur.next;
  }
  return cur ? cur.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if(this.head != null) {
    let node = new ListNode(val);
    node.next = this.head.next;
    this.head.next = node;
  } else {
    this.head = new ListNode(val);
  }

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  if (this.head == null) {
    this.head = new ListNode(val);
  } else {
    let cur = this.head;
    while(cur.next){
        cur = cur.next;
    }
    cur.next = new ListNode(val);
  }
};

/** 
 * @param {number} index 
 * @param {number} val 索引是从0开始的
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index <= 0) {
    this.addAtHead(val);
  } else {
    let curr = this.head;
    while(index-- && curr.next){
      curr = curr.next;
    }
    if(index >= 0) {
      let node = new ListNode(val);
      node.next = curr.next;
      curr.next = node;
    }
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0) return;
  let curr = this.head;
  while(index-- && curr.next){
      curr = curr.next;
  }
  if(index > 0) {
    curr.next = curr.next.next;
  } else {
    this.head = curr.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */