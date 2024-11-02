// Array of titles to display
const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Automation Engineer",
    "Cybersecurity Specialist"
];

let index = 0; // Initialize index for cycling through titles

// Function to change subtitle text with animation
function changeSubtitle() {
    const subtitleElement = document.querySelector(".header__subtitle");

    // Remove animation class to restart it
    subtitleElement.classList.remove("header__subtitle--animate");

    // Update the text content of the subtitle
    setTimeout(() => {
        subtitleElement.textContent = titles[index];
        
        // Add the animation class to trigger fade and slide effect
        subtitleElement.classList.add("header__subtitle--animate");

        // Update index to show the next title in the array
        index = (index + 1) % titles.length;
    }, 100); // Delay to allow the class removal to take effect
}

// Call changeSubtitle every 3 seconds
setInterval(changeSubtitle, 3000);

// Projects animation
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project__card");

    const handleScrollAnimation = () => {
        projectCards.forEach(card => {
            const cardLeft = card.getBoundingClientRect().left;
            const windowWidth = window.innerWidth;

            // Add 'visible' class when the card is partially in view
            if (cardLeft < windowWidth - 100) {
                card.classList.add("visible");
            }
        });
    };

    // Horizontal scroll listener for mobile
    document.querySelector(".projects__grid").addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();
});
