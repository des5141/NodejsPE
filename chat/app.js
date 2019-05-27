let app = require(`express`)()
let server = require(`http`).Server(app)
let io = require(`socket.io`)(server)

server.listen(3000, ()=>{
    console.log(`listening on port 3000!`)
})

app.get(`/`, (req, res)=>{
    res.sendFile(__dirname + `/client.html`)
})

io.on(`connection`, (socket)=>{
    socket.on(`receive`, (from, msg)=>{
        io.emit(`client_receive`, `${from} : ${msg}`)
    })
})