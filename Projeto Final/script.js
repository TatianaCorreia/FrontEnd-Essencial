function carregar() {
    var msg = window.document.getElementById("msg")
    /*var img = window.document.getElementById("imagem")*/
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
           msg.innerHTML = `Hora do dia: ${hora}hs e ${minuto}min`
        
    }
