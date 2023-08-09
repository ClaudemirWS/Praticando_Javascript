function repete() {
    var inicio = document.getElementById('txtInicio');
    var fim = document.getElementById('txtFim');
    var passo = document.getElementById('txtPasso');
    var msg = document.getElementById('msg');

    //LIMPA O QUE ESTIVER ESCRITO
    msg.innerHTML = '';

    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    //VERIFICA SE O INICIO,FIM E PASSO SÃO MAIORES DO QUE 0
    //E SE O INICIO É DIFERENTE DO FIM
    if (i > 0 && f > 0 && p > 0 && i != f) {
        //CONTAGEM SUCESSIVA
        if (i < f) {
            for (var cont = i; cont <= f; cont += p) {
                msg.innerHTML += ` ${cont} `;
            }
            //CONTAGEM REGRESSIVA
        } else if (i > f) {
            for (var cont = i; cont >= f; cont -= p) {
                msg.innerHTML += ` ${cont} `;
            }
        }
    //MENSAGEM DE ERRO
    } else {
        msg.innerHTML = "Preencha os valores corretamente!";
    }

}

