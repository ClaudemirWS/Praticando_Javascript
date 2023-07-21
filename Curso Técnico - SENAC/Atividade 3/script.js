function Carregar() {
    var opcoesPagamento = document.getElementsByName('formapag');
    var valor = document.getElementById("valor");


    // Percorre os radio buttons para encontrar o selecionado
    for (var i = 0; i < opcoesPagamento.length; i++) {
        if (opcoesPagamento[i].checked) {
            opcaoSelecionada = opcoesPagamento[i].value;
            break;
        }
    }

    //Ativa o pagamento de acordo com o selecionados
    if (opcaoSelecionada == 'cartao') {
        //Torna a opção CARTÃO visível e mantém oculta a PIX
        document.getElementById('cartao').style.display = 'block';
        document.getElementById('pix').style.display = 'none';
    } else if (opcaoSelecionada == 'pix') {
        //Torna a opção PIX visível e mantém oculta a CARTÃO
        document.getElementById('pix').style.display = 'block';
        document.getElementById('cartao').style.display = 'none';
        //Calcular o valor total com desconto (10%)
        var valorTotal = document.getElementById("total");
        var valorComDesconto = valor.value - (valor.value * 10 / 100);
        valorTotal.innerHTML = "Total: R$ " + valorComDesconto.toFixed(2); //Duas casas decimais 
        valor.value = '';
    } else if (opcaoSelecionada == null) {
        alert("Selecione uma forma de pagamento!");
    }
}