"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = __importDefault(require("socket.io"));
var http_1 = __importDefault(require("http"));
var connectionCount = 0;
var server = http_1.default.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(connectionCount.toString());
        res.end();
    }
});
var ioServer = socket_io_1.default(server);
ioServer.on('connect', function () {
    connectionCount++;
});
ioServer.on('disconnect', function () {
    connectionCount--;
});
server.listen(3000);
