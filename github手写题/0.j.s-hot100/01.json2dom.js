const json = {
    tag: 'DIV',
    attrs:{
        id:'container'
    },
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', 
            attrs: {
                href: 'http://www.baidu.com',
                target: '_blank'
            }, 
            children: '有文字的a标签' 
            }
        ]
      },
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ]
}
function _render(vnode) {
    const {tag, attrs = {}, children} = vnode;
    // 处理tag
    const el = document.createElement(String(tag).toLocaleLowerCase());

    // 处理attrs
    for(const key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    // 处理children
    if(typeof children === 'string') {
        el.appendChild(document.createTextNode(children));
    } else if(Array.isArray(children) && children.length > 0) {
        const fragment = document.createDocumentFragment();
        children.forEach(item => {
            fragment.appendChild(_render(item));
        })
        el.appendChild(fragment);
    }
    return el;
}
const app = document.getElementById('app');
app.appendChild(_render(json));