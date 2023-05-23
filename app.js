const express = require('express')
const app = express()

// socket.io setup
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server)

const port = 3000

app.use(express.static('public')) // tornar qualquer arquivo dentro da pasta public, disponivel para o publico no

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('server did load')


// verificar a conexao com  servidor entre os 16 e 17 min, refazer essa parte da configuracao