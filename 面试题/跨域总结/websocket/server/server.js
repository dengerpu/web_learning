const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // 监听来自客户端的消息
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // 向客户端发送消息
    ws.send(`Server received: ${message}`);
  });

  // 监听连接断开事件
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('WebSocket Server is running!');
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
