
interface ILinkListNode {
  value: number;
  next?: ILinkListNode;
}

function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  // 定义三个指针
  let prev : ILinkListNode | null = null;
  let curr : ILinkListNode | null = null;
  let next : ILinkListNode | null = listNode;
  while(next) {
    // 删除第一个元素的next
    if(curr !== null && prev === null) {
      delete curr.next;
    }
    // 反转指针
    if(curr && prev) {
      curr.next = prev;
    }
    prev = curr;
    curr = next;
    next = next.next;
  }

}

/**
 * 创建链表
 * @param arr 
 * @returns 
 */
function createLinkList(arr: number[]):ILinkListNode  {
  const length = arr.length;
  if(length === 0) throw new Error('arr is empty')
  // 最后一个结点
  let currNode : ILinkListNode = {
    value: arr[length - 1]  
  }
  if(length === 1) return currNode
  for(let i = length - 2; i >= 0; i--) {
    currNode = {
      value: arr[i],
      next: currNode
    }
  }
  return currNode
}