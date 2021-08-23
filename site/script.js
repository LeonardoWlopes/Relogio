function load(){
    //Variaveis do codigo
    var horagrande = document.getElementById('hora_completa')
    var title = document.getElementById('titulo')
    var mensagem = document.getElementById('msg')
    var mensagem2 = document.getElementById('msg2')
    var imagem = document.getElementById('imagem')
    
    horacompleta = obterhoracompleta()
    hora = obterhora()
    title.innerText = ('Hora: ' + horacompleta)
    horagrande.innerText = (horacompleta)
    mensagem.innerHTML = (`Agora são <strong>${hora}</strong> Horas.`)
    mudar(mensagem2, imagem)
    
}
function obterhora(){
    var data = new Date()
    var hora = data.getHours()
    return hora
}
function obterhoracompleta(){
    var data = new Date()
    if(data.getMinutes() < 10){
        var minutos = "0" + data.getMinutes()
    }
    else{
        var minutos = data.getMinutes()
    }
    var horacompleta = data.getHours() + ':' + minutos
    return horacompleta
}
function mudar(mensagem2, imagem){
    if(hora >= 0 && hora<= 12){
        imagem.src = 'img/manha.png'
        document.body.style.background = '#f9ed9b'
        mensagem2.innerText = "Bom Dia !"
        document.body.style.color = 'black'
    }
    else if(hora >= 13 && hora<= 18){
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#d9a059'
        mensagem2.innerText = "Boa Tarde !"
    }
    else{
        imagem.src = 'img/noite.png'
        document.body.style.backgroundImage = "url('img/Milky Way.jpg')"
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundAttachment = "fixed"
        mensagem2.innerText = "Boa Noite !"
    }
}