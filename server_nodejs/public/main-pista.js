var socket = io.connect('https://evento.bifrostserver.tk/', { forceNew: true })
socket.on('pistas', function(data){
    let obj = document.getElementById('pistas')
    console.log(data)
    let a = data.map(function(elmt, index){
        return(`
        <div class="pista">
            <p>
                ${elmt.pista}
            </p>
        </div>
        `)
    }).join(" ");
    obj.innerHTML = a
})