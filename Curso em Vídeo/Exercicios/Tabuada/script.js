function tabuada() {
    var num = document.getElementById('valor');
    var tab = document.getElementById('msg');

    tab.innerHTML = '';

    num = Number(num.value);

    for (let i = 1; i <= 10; i++) {
        tab.innerHTML += `${num} x ${i} = ${num*i}\n`;
    }

}