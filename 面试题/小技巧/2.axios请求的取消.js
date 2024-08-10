import axios from 'axios';

let cancelTokenSource = null;

function fetchDataForTab(tabId) {
  // 如果已经有一个未完成的请求，先取消它
  if (cancelTokenSource) {
    cancelTokenSource.cancel('Operation canceled due to new request.');
  }

  // 创建新的取消令牌
  cancelTokenSource = axios.CancelToken.source();

  axios.get(`https://api.example.com/data?tab=${tabId}`, {
    cancelToken: cancelTokenSource.token,
  })
  .then(response => {
    // 处理成功响应
    console.log(response.data);
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      // 处理其他错误
      console.error(error);
    }
  });
}

// Example: 用户切换Tab时调用此函数
fetchDataForTab(1);

// 当用户在请求未完成时切换到另一个Tab
fetchDataForTab(2);
