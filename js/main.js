var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.mainMenuList');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('closeMenu');
}, false);

menu.addEventListener('click', function() {
	menu.classList.toggle('closeMenu');
	var move = window.pageYOffset;
	move -= 100;
	console.log(move);
	window.scrollTo(0, move);
}, false);

