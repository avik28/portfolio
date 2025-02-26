(function () {
    function typeEffect(element, text, speed) {
        let index = 0;
        let isDeleting = false;

        function updateText() {
            if (!isDeleting && index <= text.length) {
                element.innerText = text.substring(0, index);
                index++;
            } else if (isDeleting && index >= 0) {
                element.innerText = text.substring(0, index);
                index--;
            }

            if (index === text.length) {
                setTimeout(() => { isDeleting = true; }, 1000); // Pause before deleting
            } else if (index === 0 && isDeleting) {
                setTimeout(() => { isDeleting = false; }, 500); // Pause before retyping
            }
            
            setTimeout(updateText, isDeleting ? speed/3: speed/3);
        }

        updateText();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const h1Element = document.getElementById("typing-text");
        if (h1Element) {
            typeEffect(h1Element, "HI WELCOME TO MY PORTFOLIO TO KNOW MORE CLICK ON ABOUT", 100);
        }
    });
})();
