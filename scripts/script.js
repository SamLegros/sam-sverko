// smooth-scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

// typed.js
var options = {
	strings: ["I'm a web developer.", "^250 I'm an avid reader.", "^250 I'm a big sci-fi fan.", "^250 I'm probably thinking of what to do for dinner right now."],
	typeSpeed: 100,
	backSpeed: 50,
	smartBackspace: true,
	loop: true,
	loopCount: Infinity,
};

var typed = new Typed("#home-typed", options);

// back to top button
var pixelsFromTop = 500;

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > pixelsFromTop || document.documentElement.scrollTop > pixelsFromTop) {
		document.getElementById("back-to-top-button").style.display = "block";
	} else {
		document.getElementById("back-to-top-button").style.display = "none";
	}
}

// resize font
var resizeFontSection = document.getElementById('section-settings');
var resizeButton = resizeFontSection.getElementsByTagName('button');

for (var i = 0; i < resizeButton.length; i++) {
	resizeButton[i].addEventListener('click', resizeFont.bind(this, (i * 50) + 100));
}

function resizeFont(size) {
	var navBar = document.getElementsByClassName('navbar');
	if (size == '200') {
		$('#css-font-size-1-5').remove();
		var fontSizeCSS = document.createElement('link');
		fontSizeCSS.setAttribute('rel', 'stylesheet');
		fontSizeCSS.setAttribute('type', 'text/css');
		fontSizeCSS.setAttribute('href', 'styles/font-size-2.css');
		fontSizeCSS.setAttribute('id', 'css-font-size-2');
		document.getElementsByTagName('head')[0].appendChild(fontSizeCSS);
		navBar[0].classList.remove('navbar-expand-md');
	} else if (size == '150') {
		$('#css-font-size-2').remove();
		var fontSizeCSS = document.createElement('link');
		fontSizeCSS.setAttribute('rel', 'stylesheet');
		fontSizeCSS.setAttribute('type', 'text/css');
		fontSizeCSS.setAttribute('href', 'styles/font-size-1-5.css');
		fontSizeCSS.setAttribute('id', 'css-font-size-1-5');
		document.getElementsByTagName('head')[0].appendChild(fontSizeCSS);
		navBar[0].classList.remove('navbar-expand-md');
	} else {
		$('#css-font-size-1-5').remove();
		$('#css-font-size-2').remove();
		navBar[0].classList.add('navbar-expand-md');
		var cssSheets = document.getElementsByTagName('link');
	}
}

// copy text to clipboard
function copyText() {
	console.log('Text copied!');
	// var copyText = document.getElementById('navbar-contact-button');
	var textArea = document.createElement('textarea');
	textArea.value = 'sam.sverko@gmail.com';
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	textArea.remove();
}

// enable popovers
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
//
// $(function () {
// 	$('[data-toggle="popover"]').popover()
// })
