const http = require('http')
const fork = require('child_process').fork

const server = http.createServer((req, res) => {
  if(req.url === '/get-sum') {
    console.log("主进程pid", process.pid)

    // 开启子进程
    const computeProcess = fork('./compute.js')
    computeProcess.send("开始计算")

    computeProcess.on('message', data => {
      console.log("主进程接收到的信息:", data)
      res.end('sum is' + data)
    })

    computeProcess.on('close', () => {
      console.info('子进程因报错而退出')
      computeProcess.kill()
      res.end('error')
    })
  }
})
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/')
})