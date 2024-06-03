const data = [
  {
    id: 1,
    label: 'Level one 1',
    catory: true,
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        catory: true,
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
            catory: false
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
            catory: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'Level one 2',
    catory: true,
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
        catory: false
      },
      {
        id: 6,
        label: 'Level two 2-2',
        catory: false
      }
    ]
  },
  {
    id: 3,
    label: 'Level one 3',
    catory: true,
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
        catory: false
      },
      {
        id: 8,
        label: 'Level two 3-2',
        catory: false
      }
    ]
  }
];

let newNodeId = 41; // 固定ID或生成新ID的起始点

const addSelectAllNode = (nodes) => {
  nodes.forEach(node => {
    if (node.catory && node.children) {
      let hasLeaf = node.children.some(child => !child.catory);
      if (hasLeaf) {
        // 添加 "全选" 节点
        node.children.unshift({
          id: newNodeId++, // 固定ID或生成新ID
          label: '全选',
          catory: false
        });
      }
    }

    // 递归处理子节点
    if (node.children) {
      addSelectAllNode(node.children);
    }
  });
};

addSelectAllNode(data);
console.log(JSON.stringify(data, null, 2));
