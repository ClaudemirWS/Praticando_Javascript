function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = window.document.getElementById('txtAno');
    var foto = window.document.getElementById('foto');
    var msg = window.document.getElementById('msg');

    if (nasc.value == 0 || nasc.value > ano || nasc.value < 1900) {
        alert("Digite o ano do seu nascimento corretamente.")
    } else {
        //ENVIA IMAGEM IDEAL
        var idade = ano - nasc.value;
        if (idade <= 15) {
            foto.src = 'imagens/criancas.png';
        } else if (idade > 15 && idade <= 20){
            foto.src = 'imagens/adolescentes.png';
        } else if (idade > 20 && idade <= 60){
            foto.src = 'imagens/adultos.png';
        } else {
            foto.src = 'imagens/idosos.png';
        }
        
        //VERIFICA SEXO MARCADO
        var rad = window.document.getElementsByName('radsex');
        var sexo = '';
        if (rad[0].checked) {
            sexo = 'Masculino';
        } else {
            sexo = 'Feminino';
        }

        //ESCREVE MENSAGEM NA TELA
        msg.innerHTML = `Você é do sexo ${sexo} e tem ${idade} anos.`;
    }
}

