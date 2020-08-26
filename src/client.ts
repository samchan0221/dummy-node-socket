import io from 'socket.io-client';
import http from 'http';

const server = http.createServer((req, res) => {
    const socket = io(process.env.SOCKET_SERVER_URL || 'http://localhost:3000');
    const connection = io.connect();
    connection.on('connect', ()=>{
        console.log(socket.id, 'connected');
    });

    connection.on('disconnect', ()=>{
        console.log(socket.id, 'disconnect');
    });

    res.write(socket.id);
    res.end();
});

server.listen(3001);