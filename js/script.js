const myKm = parseFloat(prompt('Scrivi qui i Km che vuoi percorrere:'));
const myAge = parseInt(prompt('Scrivi qui la TUA età:'));
const rate = 0.21;

// calcolo prezzo:
let ticketPrice = parseFloat(myKm * rate);
ticketPrice = ticketPrice.toFixed(2)
console.log(myKm, myAge, ticketPrice);




