var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
   console.log('.:: eClinic user connected');

   socket.on('disconnect', function () {
      console.log('.:: eClinic user disconnected');
   });

   socket.on('channelBase', function (data) {
     io.emit('channelBase', {})
   })
});

http.listen(3000, function() {
   console.log('.:: eClinic socket server listening on *:3000');
});