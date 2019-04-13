// Array of facts about Boo!
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// Grab the button, wait for a click even
$("#factButton").on("click", function() {
	// Get a random number from 0 to the length of the fact list
	var number = Math.floor((Math.random() * booFacts.length));
	// Set the fact text to the randomly chosen fact
	$("#factText").text(booFacts[number])
})


// Handles changing color change for the fun text
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


//Grows and shrinks the image
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})