let numero = 0;
let somma = 0;

// ciclo con il for 

for (let i = 0; i < 5; i++) {
    numero = parseInt(prompt('inserisci numero'));
    somma += numero;
}
console.log(somma);

//  ciclo while 
let i = 0;
while (i < 5) {
    numero = parseInt(prompt('inserisci numero'));
    somma += numero;
    i++
}
console.log(somma);