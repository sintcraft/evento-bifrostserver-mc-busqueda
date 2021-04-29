var socket = io.connect('https://evento.bifrostserver.tk/', { forceNew: true })

socket.on('green', function(data){
    document.getElementById("punto").style.color = "#0f0"
})
socket.on('red', function(data){
    document.getElementById("punto").style.color = "#a00"
})
socket.on('pista', function(data){
    var pista = data.pista
})
socket.on('finish_timer', function(data){
    location.href = '/'
})