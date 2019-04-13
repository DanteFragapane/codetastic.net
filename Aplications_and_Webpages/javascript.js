$("#button1").click(function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
});

$("#button2").click(function() {
	$("#box").css("backgroundColor", "blue");
});

$("#button3").click(function() {
    $("#box").css("opacity", 0);
});

$("#button4").click(function() {
    $("#box").css("opacity", 1);
    $("#box").css("backgroundColor", "orange");
    $("#box").css("height", "150px");
    $("#box").css("width", "150px");
});