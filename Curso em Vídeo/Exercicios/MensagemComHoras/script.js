function Carregar() {
    var mensagem = document.getElementById('msg');
    var mensagem2 = document.getElementById('msg2');
    var img = document.getElementById('img');
    var dateGetter = new Date();
    var hora = dateGetter.getHours();
    var minuto = dateGetter.getMinutes();
    mensagem.innerHTML = `São ${hora} horas e ${minuto} minutos.`;
    if (hora >= 0 && hora < 12) {
        mensagem2.innerHTML = `Bom dia!`;
        img.src = 'imagens/manha.png';
        document.body.style.background = '#DAA520';
    } else if (hora >= 12 && hora < 18){
        mensagem2.innerHTML = `Boa tarde!`;
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#D2691E';
    } else {
        mensagem2.innerHTML = `Boa noite!`;
        img.src = 'imagens/noite.png';
        document.body.style.background = '#2F4F4F';
    }
}
