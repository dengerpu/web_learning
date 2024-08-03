async function myFetchAsync(url, options) {
    try {
        const response = await fetch(url, options);
        // 只读属性 ok 包含一个布尔值，表明响应是否成功（状态码在 200-299 范围内）
        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        return response;
    } catch(error) {
        console.error(error);
        throw error;
    }
}