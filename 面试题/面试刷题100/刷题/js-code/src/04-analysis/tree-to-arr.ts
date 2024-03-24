
interface IArrayItem {
  id: number,
  name: string,
  parentId: number
}
interface ITreeItem {
  id: number,
  name: string,
  children?: ITreeItem[]
}

function treeToArray(tree:ITreeItem) {
  const map = new Map<ITreeItem, ITreeItem>()
  const result: IArrayItem[] = []

  // 广度优先遍历
  const queue: ITreeNode[] = [] 
  queue.push(tree)

  while(queue.length > 0) {
    const currNode = queue.shift()
    if(currNode == null) break
    const {id, name, children = []} = currNode

    // 创建数组
    const parentItem = map.get(currNode)
    const parentId = parentItem ? parentItem.id : 0
    result.push({id, name, parentId})

    if(children.length > 0) {
      children.forEach(child => {
        // 存储当前节点的父节点
        map.set(child, currNode)
        queue.push(child)
      })
    }
  }
  return result;
}

const obj = {
  id: 1,
  name: '部门A',
  children: [
      {
          id: 2,
          name: '部门B',
          children: [
              { id: 4, name: '部门D' },
              { id: 5, name: '部门E' }
          ]
      },
      {
          id: 3,
          name: '部门C',
          children: [
              { id: 6, name: '部门F' }
          ]
      }
  ]
}
const arr1 = treeToArray(obj)
console.info(arr1)