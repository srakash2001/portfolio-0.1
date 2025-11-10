$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scroll > 500){
			$('.scroll-up-btn').addClass("show")
		}else{
			$('.scroll-up-btn').removeClass("remove")
		}
	});
	// slide up btn option
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 1});

	});

	// typing animation script
	var typed = new Typed (".typing", {
		strings: ["Front End Web Developer.", "Freelancer.", "Student."],
		typespeed: 100,
		backspeed: 60,
		loop: true
	});

	var typed = new Typed (".typing-2", {
		strings: ["Front End Web Developer.", "Freelancer.", "Student."],
		typespeed: 100,
		backspeed: 60,
		loop: true
	});


	// menu/navbar click option
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");

	});

});


	// projects
	function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}