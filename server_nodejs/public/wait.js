var timer = document.getElementById("timer");
async function iniciar() {
  var tiempo_server = await fetch("https://evento.bifrostserver.tk/api/status")
    .then((a) => a.json())
    .then((a) => {
      return a.time;
    });
  var tiempo_actual = Date.now();
  setInterval(function () {
    let time = new Date(tiempo_server - tiempo_actual);
    let mes = time.getUTCMonth()
    let dias = time.getUTCDay()
    let hora = time.getUTCHours()
    let minutos = time.getUTCMinutes()
    let seconds = time.getSeconds()
    if(hora == 0 && minutos == 0 && seconds == 0 && dias == 0){
        timer.textContent = '00:00:00:00'
        document.getElementById('body').classList = 'out'
        setTimeout(function(){location.href='/'},1500)
    }
    if(dias<10){
	dias = '0' + dias
    }
    if(hora<10){
        hora = '0' + hora
    }
    if(minutos<10){
        minutos = '0' + minutos
    }
    if(seconds<10){
        seconds = '0' + seconds
    }
    timer.textContent = dias + ':' + hora + ':' + minutos + ':' + seconds
    tiempo_actual = tiempo_actual+1000
  }, 1000);
}
iniciar();
