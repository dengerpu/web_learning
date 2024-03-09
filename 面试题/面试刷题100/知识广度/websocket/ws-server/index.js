const { WebSocketServer } = require('ws')
const wsServer = new WebSocketServer({ port: 3000 }) // 创建WebSocket服务器

const list = new Set() // 保存所有连接的客户端
wsServer.on('connection', (currentWs) => {
  console.log('客户端已连接')

  // 这里，不能一直被 add 。实际使用中，这里应该有一些清理缓存的机制，长期用不到的 ws 要被 delete
  list.add(currentWs)

  currentWs.on('message', (msg) => {
    console.info('received message', msg.toString())

    // 传递给其他客户端
    list.forEach(ws => {
      if (ws !== currentWs) {
        ws.send(msg.toString())
      }
    })
  })
})