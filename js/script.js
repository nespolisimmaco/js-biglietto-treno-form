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
            ticketPrice -= minorsDiscount;
            console.log("Prezzo con sconto minorenni", ticketPrice);
            age = "Minorenne"; 
        } else if (age === "over65") {
            ticketPrice -= eldersDiscount;
            console.log("Prezzo con sconto over 65:", ticketPrice);
            age = "Over 65";
        } else if (age === "maggiorenne") {
            age = "Maggiorenne"
        }

        message = "Buon Viaggio";
    } else {
        message = "Errore! Inserisci i dati correttamente.";
    }
    // OUTPUT
    // Prezzo finale con massimo due decimali
    let fixedPrice = ticketPrice.toFixed(2);
    console.log("Prezzo finale con 2 decimali:", fixedPrice);
    document.getElementById("passenger").innerHTML = userName;
    document.getElementById("age").innerHTML = age;
    document.getElementById("km").innerHTML = kilometres + "km";
    document.getElementById("ticket-price").innerHTML = fixedPrice + "€";
    // Messaggio all'utente
    document.getElementById("message").innerHTML = message;  
})

