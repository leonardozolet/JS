var s = 'JavaScript e Phyton';

var pos1 = s.indexOf('Phyton');

var novaString = s.substring(13,);
console.log(novaString);

var frase = 'Olá mundo';
if(frase.startsWith('Olá')){
    let sub = frase.substring(4);
    let novaString = sub.replace('mundo','pessoal');
    let novaStringMaiuscula = novaString.toLocaleUpperCase();
    console.log(novaStringMaiuscula);
}