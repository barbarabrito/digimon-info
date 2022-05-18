let bars = document.getElementById('burger-button');


function mobileNav(){

	let ulList = document.getElementById('navList');

	if (event.type === 'touchstart') event.preventDefault();

	let navB = document.getElementById('nav-bar');

	navB.classList.toggle('active');

	const active = navB.classList.contains('active');
}

bars.addEventListener('click', mobileNav);
bars.addEventListener('touchstart', mobileNav);