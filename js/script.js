const myKm = parseFloat(prompt('Scrivi qui i Km che vuoi percorrere:'));
const myAge = parseInt(prompt('Scrivi qui la TUA età:'));
const rate = 0.21;

// calcolo prezzo:
let ticketPrice = parseFloat(myKm * rate);
ticketPrice = ticketPrice.toFixed(2);
console.log(myKm, myAge, ticketPrice);
let message = 'non è stato applicato nessuno sconto.';
let sale = 0;
if(myAge < 18){
  sale = (ticketPrice * 20) / 100;
  message = 'è stato applicato lo sconto del 20%.';
} 
  
else if (myAge > 65){
  sale = (ticketPrice * 40) / 100;
  message = 'è stato applicato lo sconto del 40%.';
} 
console.log(sale);
ticketPrice -= sale;
ticketPrice = ticketPrice.toFixed(2);
console.log(ticketPrice);

document.getElementById('result').innerHTML +=
`
<p>
  ${ticketPrice}&#8364;<br>
  Sul tuo biglietto ${message}
</p>
`;


