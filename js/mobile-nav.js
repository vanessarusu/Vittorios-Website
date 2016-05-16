(function(){

	var menuIcon = document.querySelector("#mobileMenuIcon");
	var mobileNavEl = document.querySelector("#mobileNav");
	var mobileNavLinks = document.querySelectorAll("#mobileNav a");
	var menuOpen = false;

	[].forEach.call(mobileNavLinks, function(el) {
		el.addEventListener("click", toggleNav, false);
	});

	console.log(mobileNavLinks);

	function toggleNav() {
		if(!menuOpen){
			mobileNav.style.bottom = "0px";
			menuOpen = true;
		}else{
			mobileNav.style.bottom = "-400px";
			menuOpen = false;
		}
		console.log(menuOpen);
	}

	menuIcon.addEventListener("click", toggleNav, false);

})();