var scroll = new SmoothScroll('a[href*="#"]', {speed: 1000});

var options = {
    strings: ["I'm a web developer.", "^250 I'm an avid reader.", "^250 I'm a big sci-fi fan.", "^250 I'm probably thinking of what to do for dinner right now.", "^250 I'm looking for new opportunities!"],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
}

var typed = new Typed("#home-typed", options);

$('.btn-alt').on('click', function() {
    alert("Source code for projects coming soon!");
});
