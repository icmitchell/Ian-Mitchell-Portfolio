$(document).ready(function() {
	$(".img").mouseenter(function() {
		$(this).addClass("hover")
	})

	.mouseleave(function() {
		$(this).removeClass("hover")
	})


	$(".resumeClass").on("click", function() {
		window.open("assets/Ian-Mitchell.pdf", '_blank')
	})

});
