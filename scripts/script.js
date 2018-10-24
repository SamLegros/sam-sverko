// smooth-scroll
var scroll = new SmoothScroll('a[href*="#"]', {speed: 1000});

// typed.js
var options = {
    strings: ["I'm a web developer.", "^250 I'm an avid reader.", "^250 I'm a big sci-fi fan.", "^250 I'm probably thinking of what to do for dinner right now.", "^250 I'm looking for new opportunities!"],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
}

var typed = new Typed("#home-typed", options);

// back to top button
var pixelsFromTop = 500;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > pixelsFromTop || document.documentElement.scrollTop > pixelsFromTop) {
        document.getElementById("back-to-top-button").style.display = "block";
    } else {
        document.getElementById("back-to-top-button").style.display = "none";
    }
}

// general page
$('.btn-alt').on('click', function() {
    alert("Source code for projects coming soon!");
});
