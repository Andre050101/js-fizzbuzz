/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*Variabili e costanti:*/
/*Numeriche*/
const n = 100; /*Quantità numeri da stampare*/
const m1 = 3;  /*Multiplo 1*/
const m2 = 5;  /*Multiplo 2*/

/*Di tipo String*/
const fizz = "Fizz"; /*Stringa corrispondente a m1*/
const buzz = "Buzz"; /*Stringa corrispondente a m2*/

/*Elaborazione dati*/
/*Ciclo iterativo per stampa numeri da 1 a n e per i multipli di 3 e 5 stampa fizzbuzz, per multipli solo di 3 fizz, per multipli solo di 5 buzz e per i restanti numeri il numero stesso:*/
/*Metodo tradizionale*/
for(let i = 1; i <= n; i++) {

    /*Per multipli di 3 e di 5 stampo FizzBuzz*/
    if((i % m1 === 0) && (i % m2 === 0)) {
        console.log(fizz+buzz);
    }

    /*Per multipli di 3 ma non di 5 stampo fizz*/
    else if((i % m1 === 0) && (i % m2 !== 0)) {
        console.log(fizz);
    }

    /*Per multipli di 5 ma non di 3 stampo buzz*/
    else if((i % m1 !== 0) && (i % m2 === 0)) {
        console.log(buzz);
    }

    /*Per numeri non multipli ne di 3 ne di 5 stampo il numero*/
    else {
        console.log(i);
    }
}

/*Metodo con operatore ternario*/
for(let i = 1; i <= n; i++){
    console.log(
        ((i % m1 === 0) && (i % m2 === 0)) ? fizz+buzz :
        ((i % m1 === 0) && (i % m2 !== 0)) ? fizz :
        ((i % m1 !== 0) && (i % m2 === 0)) ? buzz :
        i
    );
}