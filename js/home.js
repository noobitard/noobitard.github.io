var randomCovers = [
    "https://www.youtube.com/embed/2DruyPVMMx8",
    "https://www.youtube.com/embed/b2r5fYvHnbs", 
    "https://www.youtube.com/embed/_fjgZHhZ-Y4",
    "https://www.youtube.com/embed/8XXRh2a2Boc",
    "https://www.youtube.com/embed/mobWZBnivJw",
    "https://www.youtube.com/embed/2rMEji9wKa8",
    "https://www.youtube.com/embed/qNIyobivZzE",
    "https://www.youtube.com/embed/tPt4iJhaYI8",
    "https://www.youtube.com/embed/dTvTG977dcg"
]

$(document).ready(()=>{
    $('#music-note').css('-webkit-animation','animated-icon 1s 100ms  ease-in-out both infinite');
    $('#academic-book').css('-webkit-animation','animated-icon 1s 100ms  ease-in-out both infinite');

    $("#music-note").click(()=>{
        $('body').css('overflow', 'hidden');
        $("#academic-home-container").fadeToggle(500);
        $("#music-home-container").fadeToggle(500);
        $('body').animate({backgroundColor: '#424549', color: '#FFFFFF'}, 500);
        var source = randomCovers[Math.floor(Math.random()*randomCovers.length)];
        $("#youtube-player").prop("src", source);
        setTimeout(() => $('body').css('overflow', 'visible'), 500);
    })

    $("#academic-book").click(()=>{
        $('body').css('overflow', 'hidden');
        $("#academic-home-container").fadeToggle(500);
        $("#music-home-container").fadeToggle(500);
        $('body').animate({backgroundColor: '#f2f2f2', color: '#000000'}, 500);
        $("#youtube-player").prop("src", "");
        setTimeout(() => $('body').css('overflow', 'visible'), 500);
    })
})