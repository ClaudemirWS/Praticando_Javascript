/* API Fetch
fetch("http://localhost:3000/noticias", {
    method: "POST",
    body: JSON.stringify({
        titulo: "API Fetch",
        conteudo: "Conhecendo a API Fetch",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));    
*/

/*Utilizando JQuery*/
$.get("http://localhost:3000/noticias", function (data, status) {
    for (i = 0; i < data.length; i++) {
        $('#news').append("<ul><li>" + data[i].titulo + " - " + data[i].conteudo + "</li></ul>");
    }
}); 