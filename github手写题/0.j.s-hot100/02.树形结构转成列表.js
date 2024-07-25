const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1
            }
        ]
    }
]
// [
//   { id: 2, text: '节点1_1', parentId: 1 },
//   { id: 1, text: '节点1', parentId: 0 }
// ]

const data2 = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1,
                children: [
                    {
                        id: 3,
                        text: '节点1_1_1',
                        parentId: 2,
                        children: [
                            {
                                id: 3.1,
                                text: '节点3.1_1',
                                parentId: 3
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                text: '节点1_2',
                parentId: 1
            }
        ]
    },
    {
        id: 5,
        text: '节点2',
        parentId: 0,
        children: [
            {
                id: 6,
                text: '节点2_1',
                parentId: 5
            }
        ]
    }
];

function treeToList(data) {
    let res = [];
    data.forEach(item => {
        res.push({
            id: item.id,
            text: item.text,
            parentId: item.parentId
        })
        if(item.children) {
            let child = treeToList(item.children)
            res.push(...child);
        }
    })
    return res;
}
console.log(treeToList(data));
console.log(treeToList(data2));