// Function to set the theme and update DOM
function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;

	// Optional: also toggle 'night' class for backward compatibility
	if (themeName === 'theme-dark') {
		document.documentElement.classList.add('night');
	} else {
		document.documentElement.classList.remove('night');
	}

	// Handle .text-black elements (similar to your old code)
	
}

// Function to toggle between light and dark themes
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

// Immediately apply the saved theme on page load
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
})();

// Attach click event (works with jQuery or plain JS)
jQuery(document).ready(function ($) {
	$('#theme-toggle, .light').on('click', function (e) {
		e.preventDefault();
		toggleTheme();
	});
});





