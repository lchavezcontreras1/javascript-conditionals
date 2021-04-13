let counter = 0;
$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);
})

function countClick(e) {
    e.preventDefault();
    counter++
    $("p#clickCountOutput").text(counter);
    if (counter === 10) {
        counter = 0;
    }
}

function checkAge(e) {
    e.preventDefault();
    let birthYear = parseFloat($("input#birthYear").val());
    let age = 2021 - birthYear;
    if (age < 18) {
        $("p#birthYearOutput").text("Child");
    } else {
        $("p#birthYearOutput").text("Adult");
    }
}

function calcSalesTax(e) {
    e.preventDefault();
    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"
    let amount = parseFloat($("input#purchaseAmount").val());

    // Get the state from the text box with ID "state"
    let state = $("input#state").val();

    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput
    if (state === "WI") {
        let tax = 0.05 * amount;
        $("p#salesTaxOutput").text(tax.toFixed(2));
    } else if (state === "IL") {
        let tax = 0.08 * amount;
        $("p#salesTaxOutput").text(tax.toFixed(2));
    } else if (state === "MN") {
        let tax = 0.075 * amount;
        $("p#salesTaxOutput").text(tax.toFixed(2));
    } else if (state === "MI") {
        let tax = 0.055 * amount;
        $("p#salesTaxOutput").text(tax.toFixed(2));
    } else {
        $("p#salesTaxOutput").text("Error1");
    }
    // If the user enters a state not listed above,
    // print "Error" instead

}

function recommendFood(e) {
    e.preventDefault();
    // Get the cat's age from the text box with
    // ID of "catAge"
    let catAge = $("input#catAge").val();
    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"
    if (catAge < 2) {
        $("p#catAgeOutput").text("Kitten Chow");
    } else if (catAge < 10) {
        $("p#catAgeOutput").text("Adult Chow");
    } else {
        $("p#catAgeOutput").text("Senior Chow");
    }
    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"
}

function drawCard(e) {
    e.preventDefault();
    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;
    let face = "";
    //Ace(1) 2-10 Jack(11) Queen(12) King(13)
    if (faceValue === 1){
        face = "Ace";
    } else if (faceValue === 11){
        face = "Jack";
    }
    else if (faceValue === 12){
        face = "Queen";
    }
    else if (faceValue === 13){
        face = "King";
    }
    else{
        face = faceValue;
    }
    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;
    // For the suits, 1 is "Clubs", 2 is "Spades", 3 is "Hearts", 4 is "Diamonds"
    if (suit === 1){
        suit = " of Clubs";
    }
    else if (suit === 2){
        suit = " of Spades";
    }
    else if (suit === 3){
        suit = " of Hearts";
    }
    else{
        suit = " of Diamonds";
    }
    // Create the description of the card, for example
    // "King of Spades" or "2 of Hearts"
    let description = face + suit;

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"
    $("p#drawCardOutput").text(description);

}
