
function getFirst(urls) {
    let promises = [];
    urls.forEach(url => {
        promises.push(axios.get(url));
    })
    // 或者
    promise2 = urls.map(item => axios.get(item));
    return Promise.race(promises);
}