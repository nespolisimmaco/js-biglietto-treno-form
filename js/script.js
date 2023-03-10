// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// INPUT
// Nome e cognome, chilometri da percorrere ed età
let userName = "";
let kilometres = 0;
let age = "";
// Prezzo del biglietto
let ticketPrice = 0;
// Messaggio per l'utente
let message = "";
// Quando viene cliccato il bottone conferma
const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", function () {
    // Nome dell'utente
    const userNameInput = document.getElementById("user-name");
    userName = userNameInput.value;
    console.log("Nome e Cognome: ", userName);
    
    // Chilometri da percorrere
    const kilometresInput = document.getElementById("kilometres");
    kilometres = parseInt(kilometresInput.value);
    console.log("Kilometri: ", kilometres);

    // Fascia d'età
    const ageInput = document.getElementById("user-age");
    age = ageInput.value;
    console.log("Età: ", age);

    // Check sugli imput
    if((userName != "") && !isNaN(kilometres) && (age != "")) {
        // LOGICA
        // Il prezzo del biglietto è definito in base ai chilometri (0.21€ al km)
        ticketPrice = 0.21 * kilometres;
        console.log("Prezzo del biglietto:", ticketPrice);
        // Sconto del 20% per minorenni
        const minorsDiscount = 0.2 * ticketPrice;
        // Sconto del 40% per over65
        const eldersDiscount = 0.4 * ticketPrice;
        console.log(minorsDiscount, eldersDiscount);
    
        if (age === "minorenne") {
            const initialPrice = document.querySelector(".initial-price");
            initialPrice.innerHTML = ticketPrice.toFixed(2) + "€";
            ticketPrice -= minorsDiscount;
            age = "Minorenne"; 
            console.log("Prezzo con sconto minorenni", ticketPrice);
        } else if (age === "over65") {
            const initialPrice = document.querySelector(".initial-price");
            initialPrice.innerHTML = ticketPrice.toFixed(2) + "€";
            ticketPrice -= eldersDiscount;
            console.log("Prezzo con sconto over 65:", ticketPrice);
            age = "Over 65";
        } else if (age === "maggiorenne") {
            age = "Maggiorenne"
            document.querySelector(".initial-price").innerHTML = "";
        }
        message = "Buon Viaggio!";
    } else {
        message = "Errore! Inserisci i dati correttamente.";
    }
    // Ripulisco i campi input
    userNameInput.value = "";
    kilometresInput.value = "";
    ageInput.value = "";
    // OUTPUT
    // Nome
    const passengerName = document.querySelector(".passenger");
    passengerName.innerHTML = userName;
    // Età
    document.querySelector(".age").innerHTML = age
    // Carrozza
    const carriageNumber = Math.floor(Math.random() * 10) + 1;
    console.log(carriageNumber);
    document.querySelector(".carriage").innerHTML = carriageNumber;
    // Posto
    const seatNumber = Math.floor(Math.random() * 50) + 1;
    console.log(seatNumber);
    document.querySelector(".seat").innerHTML = seatNumber;
    // Prezzo finale con massimo due decimali
    let fixedPrice = ticketPrice.toFixed(2);
    console.log("Prezzo finale con 2 decimali:", fixedPrice);
    const finalPrice = document.querySelector(".ticket-price");
    finalPrice.innerHTML = fixedPrice + "€";
    // Messaggio all'utente
    document.getElementById("message").innerHTML = message;  
})
// Quando viene cliccato il bottone annulla
const cancelBtn = document.getElementById("cancel-button");
cancelBtn.addEventListener("click", function () {
    // Elimino nome
    document.getElementById("user-name").value = "";
    // Elimino chilometri
    document.getElementById("kilometres").value = "";
    // Elimino età
    document.getElementById("user-age").value = "";
})