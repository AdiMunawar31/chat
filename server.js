let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
    // ketika ada pesan baru
    socket.on('newMessage', (msg) => {
        io.emit('newMessage', msg);
        console.log('Chat baru :', msg);

    });

    // ketika disconnect
    socket.on('disconnect', (msg) => {
        console.log('User disconnect');

    });
});

http.listen(3000, () => {
    console.log('Listening port 3000....');
});