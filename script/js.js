

document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 1) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}  

allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

// pętla usuwająca automatycznie dodającą się klasę show 

	window.addEventListener("scroll", addShadow);
});

// footer auto year

const footerYear = document.querySelector('.footer__year');
const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.textContent = year;
  };
  handleCurrentYear();
  
//
