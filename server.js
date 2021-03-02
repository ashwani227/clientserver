let app = require('express')();
let http = require('http').Server(app);
const io = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });


var timer;
var devices = {1: 'Load', 2: 'Block Height', 3: 'Pressure'}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


http.listen(4000, () => {
    console.log('Listening on port *: 4000');
});

timer = setInterval(function(){fcall()}, 5000)

function fcall(){
    value = Math.floor(Math.random()* (1000) + 1)
    device_id = Math.floor(Math.random()* (3) + 1)
    time = new Date().toISOString()
    data_from_device = {'id': device_id, 'value': value, 'timestamp': time}
 
    io.sockets.emit('dataFromDevice',data_from_device)
    console.log(data_from_device)
    // clearInterval(timer);
    timer = 0;
}

io.on('connection', (socket) => {

    socket.on('dataFromDevice', (data)=>{

        message.push(data);
    })

  

    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });
    
    });

// 