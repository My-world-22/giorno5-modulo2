/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso
  allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3
    }
    return a + b
}
const result = crazySum(10, 10)
console.log(result)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numberInt = 100

function boundary(numberInt) {
    if ((numberInt > 20 && numberInt <= 100) || numberInt === 400) {
        return true;

    } else {
        return false
    }

}
console.log(boundary(numberInt))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro
 e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let firstString = ' Una semplice stringa per un esercizio del corso di EPICODE'
function reverseString(firstString) {

    const splitString = firstString.split('')
    const reverseArrey = splitString.reverse('')
    const joinArrey = reverseArrey.join('')
    return joinArrey

} console.log(reverseString(firstString))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna
  rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const string= 'hello world'
const upperFirstPhrase = function (string) {
    let words = string.split(" ")//restituisce stringa separata 
    let finalString = []//array contenente nuova stringa
    for (let i = 0; i < words.length; i++) {//iterare
      let firstChar = words[i].charAt(0)//dichiara che la variabile é il primo carattere
      console.log(firstChar)//stampa il primo carattere
      let uppercaseChar = firstChar.toUpperCase()//prima lettere con uppercase H
      let cutString = words[i].slice(1)//dovrebbe prendere il valore 1 della seconda frase W
      let finalWord = uppercaseChar + cutString// 
      finalString.push(finalWord)//mette la stringa finale nell'array precedentemente creato
    }
    console.log(finalString.join(" "))//restituzione di elementi
  }
  upperFirstPhrase(string)
  
  



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero
 chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {

    const arrey = []

    for (let i = 0; i <= n; i++) {
        arrey.push(Math.floor(Math.random() * 10))//genera numeri casuali x10 escluso
    } return arrey
}
const n = 7
console.log(giveMeRandom(n))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola 
 l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2
}
const totArea = area(15, 15)
console.log(totArea)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
    if (num > 19) {
        return Math.abs(num - 19) * 3
    } else {
        return Math.abs(num - 19)
    }
} console.log(crazyDiff(20))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare 
 il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {

    if (str.startsWith('code')) {

        return str
    } else {
        return 'code' + str
    }
} let str = 'Hello World!'
console.log(codify(str))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso
  tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numInt) {
    if (numInt >= 0 && (numInt % 3 === 0) || numInt % 7 === 0) {
        return true
    } else {
        return false
    }
}
const numInt = 21
console.log(check3and7(numInt))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro 
 e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let strInga='Il lonfo non vterca'
function cutString(strInga){
return strInga.slice(1,18)
}

console.log(cutString(strInga))