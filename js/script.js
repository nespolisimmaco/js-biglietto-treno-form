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
        let ticketPrice = 0.21 * kilometres;
        console.log("Prezzo del biglietto:", ticketPrice);
        // Sconto del 20% per minorenni
        const minorsDiscount = 0.2 * ticketPrice;
        // Sconto del 40% per over65
        const eldersDiscount = 0.4 * ticketPrice;
        console.log(minorsDiscount, eldersDiscount);
    
        if(age === "minorenne") {
            ticketPrice -= minorsDiscount;
            console.log("Prezzo con sconto minorenni", ticketPrice); 
        }else if(age === "over65") {
            ticketPrice -= eldersDiscount;
            console.log("Prezzo con sconto over 65:", ticketPrice);
        }
        message = "Buon Viaggio";
        
    } else {
        message = "Errore! Inserisci i dati correttamente.";
    }
    // OUTPUT
    // Prezzo finale con massimo due decimali
    let fixedPrice = ticketPrice.toFixed(2);
    document.getElementById("user-age").innerHTML += age;
    document.getElementById("kilometres").innerHTML += kilometres + "km";
    document.querySelector("ticket-price").innerHTML += fixedPrice + "€";
    document.getElementById("message").innerHTML = message;
})

