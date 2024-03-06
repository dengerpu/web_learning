const http = require('http')
const cpuCoreLength = require('os').cpus().length
const cluster = require('cluster')

// 判断当前进程是否为主进程
if(cluster.isMaster) {
  console.log('cpu核数:', cpuCoreLength)
  for (let i = 0; i < cpuCoreLength; i++) {
    cluster.fork() // 开启子进程
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log("子进程退出")
    // 当任一子进程退出时，会触发 'exit' 事件，然后通过 cluster.fork() 重新创建一个新的子进程,以保持总的子进程数等于 CPU 核心数。
    cluster.fork() // 开启新的子进程  (进程守护)
  })
} else {
  // 多个子进程会共享一个 TCP 连接，提供一份网络服务
  const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('done')
  })
  server.listen(3000, () => {
    console.log('服务启动成功', process.pid)
  })
}