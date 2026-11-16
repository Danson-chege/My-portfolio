const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀️";
    }

});

function initTyping() {
    const el = document.querySelector('.typed-text');

    if (!el) return;

    const phrases = [
        'Building Ideas Into Digital Experiences.',
        'Learning by building real projects.',
        'Turning curiosity into code.',
        'Call me Dan.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = phrases[phraseIndex];

        // Type the text
        if (!isDeleting) {
            charIndex++;

            el.textContent = current.substring(0, charIndex);
        }

        // Delete the text
        else {
            charIndex--;

            el.textContent = current.substring(0, charIndex);
        }

        // Control the typing speed
        let typeSpeed = isDeleting ? 35 : 70;

        // When the sentence is complete
        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            typeSpeed = 2000;
        }

        // When the sentence has been deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;

            phraseIndex++;

            if (phraseIndex >= phrases.length) {
                phraseIndex = 0;
            }

            typeSpeed = 500;
        }

        // Repeat the function
        setTimeout(type, typeSpeed);
    }

    // Start the animation
    setTimeout(type, 800);
}

// Run the animation
initTyping();
