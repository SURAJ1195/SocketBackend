const express = require("express");
const socketio = require('socket.io')
const fs = require('fs');
const app = express();
var PORT = 3000;
const server = app.listen(PORT,()=>{
    console.log("server is listenning")
});

app.use(express.static('public'));
console.log('server is running...')
const io = socketio(server)

var count = 0;

io.on('connection',(socket)=>{
    console.log("new socket connected"+socket.id)

    socket.on('counter',() => {
        count++;
        io.emit('counter',count)
    })
    
})