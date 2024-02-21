
export interface ILinkListNode {
  value: number;
  next?: ILinkListNode;
}

export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
  // 定义三个指针
  let prevNode : ILinkListNode | undefined = undefined;
  let currNode : ILinkListNode | undefined = undefined;
  let nextNode : ILinkListNode | undefined = listNode;
  while(nextNode) {
    // 删除第一个元素的next
    if(currNode != null && prevNode == null) {
      delete currNode.next;
    }
    // 反转指针
    if(currNode && prevNode) {
      currNode.next = prevNode;
    }
    prevNode = currNode;
    currNode = nextNode;
    // @ts-ignore
    nextNode = nextNode?.next;
  }
  // 最后一个的补充：当 nextNode 空时，此时 curNode 尚未设置 next
  currNode!.next = prevNode;
  return currNode!;

}

/**
 * 创建链表
 * @param arr 
 * @returns 
 */
export function createLinkList(arr: number[]):ILinkListNode  {
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

const arr = [100, 200, 300, 400, 500]
const list = createLinkList(arr)
console.info('list:', list)

const list1 = reverseLinkList(list)
console.info('list1:', list1)