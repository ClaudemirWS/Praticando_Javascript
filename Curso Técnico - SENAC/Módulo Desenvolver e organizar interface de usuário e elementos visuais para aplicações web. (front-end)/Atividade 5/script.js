function escreverDados() {
    $("form").submit(function (event) {
        event.preventDefault();

        var formValues = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/bd',
            data: formValues
        })
            .done(function (data) {
                //mensagem de sucesso
            })
            .fail(function (msg) {
                //mensagem de erro
            });
    });
}

function lerDados() {
    $(document).ready(function () {
        $.get("http://localhost:3000/bd", function (data, status) {
            for (i = 0; i < data.length; i++) {
                $('#reservas').append("<tr><td>"
                    + data[i].nome
                    + "</td><td>" + data[i].dataEntrada
                    + "</td><td>" + data[i].dataSaida
                    + "</td><td>" + data[i].email
                    + "</td><td>" + data[i].adultos
                    + "</td><td>" + data[i].criancas
                    + "</td><td>" + data[i].observacoes
                    + "</td></tr>");
            }
        });
    });
}