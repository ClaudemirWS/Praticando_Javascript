function carregaFormaDePagamento() {

    //Limpa qualquer mensagem
    document.getElementById('mensagemFinal').style.display = 'none';


    //Só apresenta as opções se houver um valor recebido
    if (document.getElementById('valor').value != '') {

        var opcoesPagamento = document.getElementsByName('formapag');

        //Percorre os radio buttons para encontrar o selecionado
        for (var i = 0; i < opcoesPagamento.length; i++) {
            if (opcoesPagamento[i].checked) {
                opcaoSelecionada = opcoesPagamento[i].value;
                break;
            }
        }

        //Ativa o pagamento de acordo com o selecionado
        if (opcaoSelecionada == 'pix') {

            //Obtem o valor informado no campo "id=valor"
            var valor = parseFloat(document.getElementById("valor").value);

            //Torna a opção PIX visível e mantém oculta a CARTÃO
            document.getElementById('pix').style.display = 'block';
            document.getElementById('cartao').style.display = 'none';

            //Calcular o valor total com desconto (10%)
            var valorComDesconto = valor - (valor * 10 / 100);
            document.getElementById("totalPix").innerHTML = "Total: R$ " + valorComDesconto.toFixed(2); //Duas casas decimais

        } else if (opcaoSelecionada == 'cartao') {

            //Torna a opção CARTÃO visível e mantém oculta a PIX
            document.getElementById('cartao').style.display = 'block';
            document.getElementById('pix').style.display = 'none';

            //Inicializa os valores dos dados e das parcelas
            document.getElementById('numero').value = '';
            document.getElementById('titular').value = '';
            document.getElementById('codigo').value = '';
            document.getElementById('vencimento').value = '';
            document.getElementById('imagemCartao').src = '';
            document.getElementById('parcelas').value = '1';
            document.getElementById('mensagemInvalido').style.display = 'none';
            atualizarValorParcelas();
        }
    } else {
        mensagemErro();
    }
}

function atualizarValorParcelas() {
    //Obtem o valor informado no campo "id=valor"
    var valor = parseFloat(document.getElementById("valor").value);

    //Obter o número de parcelas selecionado
    var parcelas = parseInt(document.getElementById("parcelas").value);

    //Aplicar as devidas operações de acordo com as condições
    var valorParcelas = 0;
    if (parcelas == 1) {
        valorParcelas = valor / 1;
    } else if (parcelas == 2) {
        valorParcelas = valor / 2;
    } else if (parcelas == 3) {
        valorParcelas = valor / 3;
    } else if (parcelas == 4) {
        valorParcelas = (valor + (valor * 5 / 100)) / 4; //5% de aumento
    } else if (parcelas == 5) {
        valorParcelas = (valor + (valor * 10 / 100)) / 5; //10% de aumento
    }

    //Atualizar com o valor das parcelas
    document.getElementById("valorParcelas").innerHTML = "Parcela por mês: R$ " + valorParcelas.toFixed(2); //duas casas decimais

    //Calcular o valor total
    var valorTotal = valorParcelas * parcelas;

    //Atualizar o valor total
    document.getElementById("totalCartao").innerHTML = "Total: R$ " + valorTotal.toFixed(2); //duas casas decimais
}

function bandeiraCartao() {
    var numeroInput = document.getElementById('numero');
    var imagemCartao = document.getElementById('imagemCartao');
    var mensagemInvalido = document.getElementById('mensagemInvalido');

    //Vai verificar o inicio do número do cartão e setar a bandeira ou informar como inválido
    var valorNumero = numeroInput.value;
    if (valorNumero.startsWith('1234')) {
        imagemCartao.src = '/imagens/bandeira1.png';
        mensagemInvalido.style.display = 'none';
    } else if (valorNumero.startsWith('4321')) {
        imagemCartao.src = '/imagens/bandeira2.png';
        mensagemInvalido.style.display = 'none';
    } else {
        imagemCartao.src = '';
        mensagemInvalido.innerHTML = 'Número do cartão inválido';
        mensagemInvalido.style.display = 'block';
    }
}

//Texto e cor ao pagamento ser realizado
function mensagemPagamento() {
    document.getElementById('cartao').style.display = 'none';
    document.getElementById('pix').style.display = 'none';
    mensagem = document.getElementById('mensagemFinal');
    mensagem.style.display = 'block';
    mensagem.style.color = 'green';
    mensagem.innerHTML = 'Pagamento efetuado com sucesso!';

}

//Texto e cor ao receber valor em branco
function mensagemErro() {
    document.getElementById('cartao').style.display = 'none';
    document.getElementById('pix').style.display = 'none';
    mensagem = document.getElementById('mensagemFinal');
    mensagem.style.display = 'block';
    mensagem.style.color = 'red';
    mensagem.innerHTML = 'Digite um valor para o pagamento.';
}