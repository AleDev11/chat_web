const http = require('http');
const server = http.createServer(app);
const io = require('socket.io');
const ioServer = io(server);

ioServer.on('connection', (socket) => {
    console.log(`[INFO-SOCKET] New connection: ` + socket.id);
});

module.exports = ioServer;