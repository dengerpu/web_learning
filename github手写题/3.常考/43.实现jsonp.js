// 1. 动态生成 <script> 标签：JSONP 通过在页面中动态创建一个 <script> 标签来发起请求，
// 因为 <script> 标签不受跨域限制，可以请求其他域的资源。

// 2. 服务端返回数据格式：服务器端需要返回的数据格式是一个 JavaScript 函数调用，
// 其中包含请求的数据。函数的名称通常是通过请求参数指定的（即 cbName）。

// 3. 挂载回调函数到 window 对象：
// - 浏览器请求到数据后，服务器返回的响应会执行一个函数调用，这个函数名是客户端在请求时指定的（通过 cbName 参数）。
// - 因为返回的 JavaScript 代码会直接在全局作用域中执行，所以这个回调函数必须是全局可访问的，即挂载在 window 对象上。
// - 例如，假设你发起了一个 JSONP 请求，服务器返回的响应是：myCallback({"key": "value"})，那么 myCallback 必须是一个全局函数，浏览器才能正确执行它，并处理数据。

// 4.执行回调函数：当服务器响应返回后，挂载到 window 上的回调函数会被调用，并传入服务器返回的数据。这个回调函数处理数据后，可以执行相应的业务逻辑。
const jsonp = (url, params, cbName) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        window[cbName] = (data) => {
            resolve(data);
        }
        params = {
            ...params,
            callback: cbName
        }
        const arrs = [];
        for (let key in params) {
            arrs.push(`${key}=${params[key]}`);
        }
        script.src = `${url}?${arrs.join('&')}`;
        document.body.appendChild(script);
        script.onload = () => {
            document.body.removeChild(script);
        }
    })
}

function jsonp(url, jsonpCallback, success) {
    let script = document.createElement('script');
    script.src = url;
    script.async = true;

    window[jsonpCallback] = function(data) {
        success && success(data);
    };

    document.body.appendChild(script);
}