let botonColor = document.getElementById('bton');


function CambiarColor() {

    let hex = document.getElementById('hexcode_text');

    var random = Math.random().toString(16).substring(2, 8);

    var ColorRnd = `#${random}`;

    botonColor = ColorRnd;

    hex.innerHTML = ColorRnd;

    document.querySelector('body').style.backgroundColor = ColorRnd;
    document.querySelector('.hex_title').style.color = ColorRnd;

};
