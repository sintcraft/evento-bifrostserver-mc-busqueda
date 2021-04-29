const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

const pistas = require('./pistas.json')

io.on('connection', function(socket) {
    //socket.emit('pistas', { pistasActivadas })
    console.log('asadsadas', pistasActivadas)
})


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//rutas
app.get('/', function(req, res){
    let hora = Date.now()
    if(hora<horaCero){
        res.redirect('/wait')
        return
    }
    res.sendFile(path.resolve(__dirname + '/views/index.html'))
})
app.get('/wait', function(req, res){
    let hora = Date.now()
    if(hora>horaCero){
        res.redirect('/')
        return
    }
    res.sendFile(path.resolve(__dirname + '/views/wait.html'))
})
app.get('/pistas', function(req, res){
    let hora = Date.now()
    if(hora<horaCero){
        res.redirect('/wait')
        return
    }
    res.sendFile(path.resolve(__dirname+'/views/pistas.html'))

})

//conexiones de MC a server
app.post('/', function(req, res){
    console.log(req.body)
    if(req.body.password != 'sintcraftUnCapo'){
        res.json({
            status: false
        })
        return
    }
    if(req.body.status == 'green'){
        cerca = "#0f0"
        io.sockets.emit('green', { green: true })
    }else {
        cerca = "a00"
        io.sockets.emit('red', { red: true })
    }
    res.json({
        status: true
    })
})

// Interval para pistas
setInterval(function(){
    pistasActivadas = []
    if(horaCero>Date.now())return
    console.log('ciclo a')
    for(let i=0; i<pistas.length; i++){
        let ayudita = pistas[i]
        console.log('ciclo b', ayudita)
        if(Date.now()>=ayudita.hour){
            pistasActivadas.push(ayudita)
        }
    }
}, 5000)

//api
var cerca = "#a00"
var horaCero = 1619306400000
var pistasActivadas = []
//console.log(Date.now())
app.get('/api/status', function(req, res) {
    res.json({
        cerca,
        time: horaCero,
    })
})

// sistema de pistas, parte de la api
app.get('/api/pista', function(req, res){
    res.json({
        pistasActivadas,
    })
})

server.listen(2404, function(){
    console.log('Listen in port 3000')
})