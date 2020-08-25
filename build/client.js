"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(function (req, res) {
    if (req.url === '/') {
        var socket_1 = socket_io_client_1.default(process.env.SOCKET_SERVER_URL || 'http://localhost:3000');
        socket_io_client_1.default.connect();
        socket_1.on('connect', function () {
            console.log(socket_1.id, 'connected');
        });
        socket_1.on('disconnect', function () {
            console.log(socket_1.id, 'disconnect');
        });
        res.write(socket_1.id);
        res.end();
    }
});
server.listen(3001);
