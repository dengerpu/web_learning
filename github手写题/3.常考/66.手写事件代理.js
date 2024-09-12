function addEventLister(element, type, fn, selector) {
    if(!element || !type || !fn) return;

    // 如果没有选择器，则直接添加事件
    if(!selector) {
        element.addEventListener(type, fn);
        return;
    }

    // 如果有选择器，则使用事件代理
    element.addEventListener(type, function(event) {
        let target = event.target;
        let targets = Array.from(element.querySelectorAll(selector));
        if(targets.includes(target)) {
            fn.call(target, event);
        }
    })
}