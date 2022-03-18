var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

words = ['Hola', 'Hello','你好','Salut','こんにちは','Olá','Ciao'];

words.forEach(element => {
    typewriter.typeString(element+'!')
    .pauseFor(1700)
    .deleteAll()
    .start();
});
