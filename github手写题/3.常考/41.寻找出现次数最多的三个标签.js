// 寻找当前页面中出现最多的三个标签
// 取所有元素
const pageDomList = Array.from(document.all ?? document.querySelectorAll('*'));
// 哈希计数
const domMap = new Map();
pageDomList.forEach(dom => {
    domMap.set(dom.tagName, (domMap.get(dom.tagName) ?? 0) + 1);
})
// 排序取前三输出
const result = Array.from(domMap.entries());
result.sort((a, b) => b[1] - a[1]);
console.log(result.slice(0, 3));