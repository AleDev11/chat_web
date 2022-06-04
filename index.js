const express = require('express');
const app = express();
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require('socket.io');
const ioServer = io(server);

ioServer.on('connection', (socket) => {
    console.log('a user connected to the server with id: ' + socket.id);
    socket.on('chat', (msg) => {
        console.log('message: ' + msg);
        ioServer.emit('chat', msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}` + '/client/index.html');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});