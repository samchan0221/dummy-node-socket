import io from 'socket.io';
import http from 'http';

let connectionCount = 0;

const server = http.createServer((req, res) => {
    res.write(connectionCount.toString());
    res.end();
});

const ioServer = io(server);

ioServer.on('connect', () => {
    connectionCount++;
});

ioServer.on('disconnect', () => {
    connectionCount--;
});

server.listen(3000);