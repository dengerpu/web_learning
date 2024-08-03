function ajax(url, method, data) {
    return new Promise((resolve, reject) => {
        // 1.创建XMLHttpRequest对象
        const xhr = new XMLHttpRequest();
        // 2.与服务器建立连接
        xhr.send(method, url, true);
        // 3.发送请求
        // get请求的参数支持params传递参数
        if(method === 'GET') {
            let paramsList = [];
            for(let key of Object.keys(data) ) {
                paramsList.push(key + '=' + data[key]);
            }
            if(paramsList.length > 0) {
                const paramStr = paramsList.join('&');
                url += '?' + paramStr;
            }
        }

        xhr.send(method === "POST" && data ? JSON.stringify(data) : null);
        // 接收请求
        xhr.addEventListener('readystatechange', function() {
            if(this.readyState === 4) {
                if(this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(this.status);
                }
            }
        })
    })
}

ajax("GET", "https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });