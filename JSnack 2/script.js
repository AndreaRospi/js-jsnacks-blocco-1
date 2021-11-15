let parola1 = prompt('inserisci parola');
let parola2 = prompt('inserisci un\' altra parola');

if (parola1.length == parola2.length) {
    console.log(parola1 + ' ' + parola2);
} else if (parola1.length > parola2.length) {
    console.log(parola1);
} else {
    console.log(parola2);
}