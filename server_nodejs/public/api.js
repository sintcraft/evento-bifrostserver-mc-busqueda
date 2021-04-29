var tiempo = 0;
var tiempoInicial = Date.now();
var time;

//pedida a la api para iniciar timer
fetch("https://evento.bifrostserver.tk/api/status")
  .then((a) => a.json())
  .then((a) => {
    tiempoInicial = tiempoInicial - a.time;
    document.getElementById("punto").style.color = a.cerca;
  });

// Timer de tiempo transcurrido
setInterval(function () {
  time = new Date(tiempoInicial + tiempo);
  let hora = time.getUTCHours();
  let minutos = time.getUTCMinutes();
  let segundos = time.getUTCSeconds();
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minutos < 10) {
    minutos = "0" + time.getUTCMinutes();
  }
  if (segundos < 10) {
    segundos = "0" + time.getUTCSeconds();
  }
  document.getElementById("tiempo").textContent =
    "Tiempo transcurrido: " +
    hora +
    ":" +
    minutos +
    ":" +
    segundos;
  tiempo = tiempo + 1000;
  //console.log(time, tiempo, tiempoInicial);
}, 1000);



// Boton de informacion
var hiden = false
function information(){
    if(!hiden){
        document.getElementById('shadown').classList = 'hiden'
        document.getElementById('shadown').innerHTML = `
        <div id="form">
            <h3>Evento!</h3>
            <p>
                Bases del evento: <br>
                ◇ Tendras que explorar el mapa! hemos escondido una dangeon dentro de 30k -30k
                tanto en "x" como en "z" en el mapa del servidor. <br>
                ◇ Una vez encuentres la dangeon tendras que luchar contra el boss y ya te digo
                que no sera un boss muy facil, tiene ataques secuenciales ademas de tener mucha vida
                y mucho de todo. <br>
                ◇ En esta pagina podras ver en tiempo real si alguien esta a 2k bloques de la dangeon
                 el punto en el mapa se volvera verde y cada 30min se dara una pista para que puedan descartar zonas o disminuir
                su zona de busqueda. <br> <br>
                Premios: <br>
                ◇ Unas 2 elytras pigi las cuales estan encantadas con unbreaking 10 ademas
                una probabilidad del 70% de que el boss te suelte cualquier parte de su armadura
                y/o armas. <br>
                ◇ Y todos los que participen tendran un embrema en su nombre toda la temporada
            </p>
        </div>
        <div id="sombra"></div>
        `
        hiden = true
    }else{
        document.getElementById('shadown').classList = 'shadown'
        document.getElementById('shadown').innerHTML = ''
        hiden = false
    }
}
var pista_v = false
function pista() {
  if(!pista_v){
    document.getElementById('listaPistas').classList = 'shadown'
    pista_v = true
  }else{
    document.getElementById('listaPistas').classList = 'slow'
    pista_v = false
  }
}