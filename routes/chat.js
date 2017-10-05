module.exports = function ( app ) {
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.get('/chat', function (req, res) {
        res.sendFile('chat.html', { root: './views/'});
    });

    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
        });
    });

    http.listen(2000, function(){
        console.log('listening on *:3000');
    });
}