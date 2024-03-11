/**
 * 访问节点
 * @param node 
 */
function visitNode(node: Node) {
  if(node instanceof Comment) {
    // 注释(nodeType为8)
    console.info('Comment node ---', node.textContent)
  }
  if(node instanceof Text) {
    // 文本(nodeType为3)
    const t = node.textContent?.trim()
    if (t) {
      console.info('Text node ---', t)
    }
  }
  if(node instanceof HTMLElement) {
    // 元素(nodeType为1)
    console.info('Element node ---', `<${node.tagName.toLowerCase()}>`)
  }
}
/**
 * 深度优先遍历
 * @param node 
 */
function dfs(node: Node) {
  visitNode(node)
  const children = node.childNodes
  if(children.length > 0) {
    children.forEach(child => {
      dfs(child) // 递归
    })
  }
}

/**
 * 深度优先遍历-栈
 * @param node 
 */
function dfsStack(node: Node) {
  const stack: Node[] = []
  // 根节点压栈
  stack.push(node)
  while(stack.length > 0) {
    const currentNode = stack.pop() // 最后一个元素出栈
    if(currentNode == null) break
    // 访问结点
    visitNode(currentNode)
    // 子节点压栈
    const childrens = currentNode.childNodes
    if(childrens.length > 0) {
      // 反顺序入栈
      Array.from(childrens).reverse().forEach(child => {
        stack.push(child)
      })
    }
  }
}

/**
 * 广度优先遍历
 * @param root 
 */
function bfs(root: Node) {
  const queue: Node[] = []
  queue.push(root)
  while(queue.length > 0) {
    const currentNode = queue.shift() // 第一个元素出栈
    if(currentNode == null) break
    // 访问结点
    visitNode(currentNode)
    const children = currentNode.childNodes
    // 子节点入队
    if(children.length > 0) {
      children.forEach(child => {
        queue.push(child) // 入队
      })
    }
  }
}

const box = document.getElementById('box')
if (box == null) throw new Error('box is null')
dfs(box)
dfsStack(box)
// bfs(box)