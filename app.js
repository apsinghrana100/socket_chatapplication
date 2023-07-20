const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(http,{
    cors:{
    origin:'http://127.0.0.1:5500',
    methods:['GET','POST']
    }
});

app.use(cors({
   origin: 'Access-Control-Allow-Origin: http://127.0.0.1:5500',
    methods:['GET','POST']
}))



io.on('connection',(socket)=>{
    console.log("new user is connected");
    socket.on("client",arg=>{
            console.log(arg);
             socket.broadcast.emit("server",arg);
    })
    
})

http.listen(3000,()=>{
    console.log("the port 3000 thousand is runnig");
})