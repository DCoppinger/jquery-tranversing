$(document).ready(function() {
	//sets <a> element within paragraph  to yellow  
	$("p").click(function() {
		$(this).children("a").css("background-color", "yellow");
		/* returns all the <a> child elements that are 
		within this paragraph*/
	});

	$(".card").click(function() {
		$(this).toggleClass("bgPink");

	});

	// Toggle the visibility of the paragraph when a button is clicked 
	$("button").click(function() {
		$(this).prev().slideToggle('slow');
	});

	// Open the paragraph once the image is clicked
	$("img").click(function() {
		$(this).next().children("p").slideDown();
	});

	// all panels disappear except those highlighted by clicking on them
	$("#select_btn").click(function() {
		$(".card:not(.bgPink)").hide();	 
	});

	// Select all cards
	$("#all_btn").click(function(){
		$(".card").show();	 
	});
});
