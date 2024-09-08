var audio = document.createElement("audio");
audio.setAttribute("src", "car.mp3");
audio.loop = true;

function playAudio() {
    audio.play().catch(function(error) {
        console.error("Autoplay was prevented:", error);
    });
}

window.addEventListener('load', function() {
    // Try to play immediately
    audio.play().catch(function() {
        // If autoplay is blocked, wait for any interaction
        document.body.addEventListener('click', playAudio, { once: true });
    });
});


