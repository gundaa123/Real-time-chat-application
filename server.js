const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const messageString = data.toString(); // convert to string

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(messageString); // send string to clients
      }
    });
  });
});

console.log('WebSocket server running on ws://localhost:8080');
