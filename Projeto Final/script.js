function carregar() {
    var msg = window.document.getElementById("msg")
    /*var img = window.document.getElementById("imagem")*/
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    
           msg.innerHTML = `Hora do dia: ${hora}hs e ${minuto}min`
        if (hora >= 0 && hora < 12) {
            /*img.src = "manha.png"*/
            document.body.style.background = "#e0e5ed"
        } else if (hora >= 12 && hora < 18) {
              document.body.style.background = "#5c597a"
        } else {
            /*img.src = "noite.png"*/
            document.body.style.background = "#0b2c3c"
        }
    }