window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu"),
		menuItem = document.querySelectorAll(".menu__link"),
		menuClose = document.querySelector(".menu__close"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		menu.classList.add("active");
	});

	menuClose.addEventListener("click", () => {
		menu.classList.remove("active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			menu.classList.remove("active");
		});
	});

	const counters = document.querySelectorAll(".skills__ratings-counter"),
		lines = document.querySelectorAll("skills__ratings-line span");

	counters.forEach((item, i) => {
		lines[i].style.width = item.innerHTML;
	});
});
