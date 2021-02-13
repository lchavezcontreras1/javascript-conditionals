let counter=0;
$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").submit(countClick);
    $("#ageForm").submit(checkAge);
    $("#taxForm").submit(calcSalesTax);
    $("#catForm").submit(recommendFood);
    $("#cardForm").submit(drawCard);

	function countClick(event){
	    event.preventDefault();
	    counter++; //++ only adds 1
        $("p#clickCountOutput").text(counter);
        if(counter===10){
            counter=0; //resets to zero
        }
		// Increment a variable that tracks the (add one)
		// number of button clicks
		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
		// When the count gets to 10, reset it to 0 clickCountOutput=0
	}
    function checkAge(event) {
        event.preventDefault();
        let year = parseInt($("input#birthYear").val());
        let age = 2021-year;
        if(age<18){
            $("p#birthYearOutput").text("Child");
        }
        else{
            $("p#birthYearOutput").text("Adult");
        }
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        // If they are 18 or over, print "Adult" instead
    }

    function calcSalesTax(event){
        event.preventDefault();
        let amount = parseFloat($("input#purchaseAmount").val());
        let stateAbbrev = $("input#state").val();
        if (stateAbbrev==="WI"){
            $("p#salesTaxOutput").text(amount*0.05);
        }
        else if(stateAbbrev==="IL"){
            $("p#salesTaxOutput").text(amount*0.08);
        }
        else if(stateAbbrev==="MN"){
            $("p#salesTaxOutput").text(amount*0.075);
        }
        else if(stateAbbrev==="MI"){
            $("p#salesTaxOutput").text(amount*0.055);
        }
        else {
            $("p#salesTaxOutput").text("Error!");
        }
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        // Get the state from the text box with ID "state"
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        // If the user enters a state not listed above,
        // print "Error" instead
    }
    function recommendFood(event){
        event.preventDefault();
        let age = parseInt($("input#catAge").val());
        if(age<2){
            $("p#catAgeOutput").text("kitten chow");
        }
        else if(age<=10){
            $("p#catAgeOutput").text("adult chow");
        }
        else{
            $("p#catAgeOutput").text("senior chow");
        }
        // Get the cat's age from the text box with
        // ID of "catAge"
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
    }

    function drawCard(event) {
        event.preventDefault();
        let faceValue = Math.floor(Math.random() * 13) + 1;
        let face = "";
        if(faceValue===1)
            face = "Ace";
        else if(faceValue===11)
            face = "Jack";
        else if(faceValue===12)
            face = "Queen";
        else if(faceValue===13)
            face = "King";
        else
            face=faceValue;
        let suit = Math.floor(Math.random() * 4) + 1;
        if(suit===1)
            suit = " of Clubs"
        else if(suit===2)
            suit = " of Spades"
        else if(suit===3)
            suit = " of Hearts"
        else
            suit = " of Diamonds"
        let description = face + suit;
        $("p#drawCardOutput").text(description);
        // Generate a random card face value (1 - 13)
        //Ace(1) 2-10 Jack(11) Queen(12) King(13)
        // Generate a random suit (1 - 4)
        // For the suits, 1 is "Clubs", 2 is "Spades", 3 is "Hearts", 4 is "Diamonds"
        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
    }

});