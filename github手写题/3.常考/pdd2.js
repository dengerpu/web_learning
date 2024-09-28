function fetchList(lastItemId) {
    if(Math.random() > 0.3) {
        return Promise.reject('fetchList err');
    }
    return Promise.resolve({
        items: [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    })
}
const fetchListWithAmount = (amount = 50) => {
    let allItems = [];
    let lastItemId = null; // 记录上一次的id
    let retries = 3; //请求重试次数

    const fetchMoreItems = () => {
        return fetchList(lastItemId)
        .then(({ items }) => {
            if(items.length === 0) {
                return allItems;
            }
            allItems = allItems.concat(items);

            if(allItems.length >= amount) {
                return allItems.slice(0, amount);
            }

            lastItemId = items[items.length - 1].id;

            return fetchMoreItems();
        }).catch((err) => {
            if(retries > 0){
                retries--;
                console.log('重试次数', 3 - retries);
                return fetchMoreItems();
            } else {
                console.log('已重试超过三次')
                return allItems;
            }
        })
    }

    return fetchMoreItems();
}
fetchListWithAmount(50).then(console.log);