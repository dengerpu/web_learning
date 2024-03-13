
interface IArrayItem {
  id: number
  name: string
  parentId: number
}
interface ITreeNode {
  id: number
  name: string,
  parentId?: number,
  children?: ITreeNode[]
}
/**
 * 数组转树, 这种有缺陷，只能应该parentId有序的情况
 * @param arr 
 * @returns 
 */
// function arrToTree(arr: IArrayItem[]): ITreeNode | null {
//   // 用于 id 和 treeNode 的映射
//   const idToTreeNode: Map<number, ITreeNode> = new Map()
//   let root = null
//   arr.forEach(item => {
//     const {id, name, parentId} = item
//     // 定义treeNode并加入map
//     const treeNode: ITreeNode = {id, name }

//     idToTreeNode.set(id, treeNode)

//     // 找到parentNode, 并加入到它的children
//     const parentNode = idToTreeNode.get(parentId)
//     if(parentNode) {
//       if(parentNode.children == null) parentNode.children = []
//       parentNode.children.push(treeNode)
//     }
//     // 找到根节点
//     if(parentId === 0) root = treeNode
//   })
//   return root
// }

function arrToTree(arr: IArrayItem[]) {
  const map: Map<number, ITreeNode> = new Map()
  let root = null
  // 将数组中的每个对象按照id存储在map中
  arr.forEach(item => {
    map.set(item.id, {...item, children: []})
  })

  // 遍历数组，将每个节点放入其父节点的children中
  arr.forEach(item => {
    if(item.parentId === 0) {
      root = map.get(item.id)
    } else {
      const parent = map.get(item.parentId)
      if(parent) {
        // @ts-ignore
        parent.children?.push(map.get(item.id))
      }
    }
  })
  return root
}

const arr = [
  { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
]
const tree = arrToTree(arr.reverse())
console.info(tree)