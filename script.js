document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Testimonial Carousel Logic
    const carousel = document.getElementById('testimonial-carousel');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Get the first testimonial card to determine the scroll distance
    const firstCard = carousel.querySelector('.bg-white');

    // Function to check and update arrow button state
    function updateArrowState() {
        if (!firstCard) return; // Exit if no cards are found

        // Use a small tolerance for floating point scroll values
        const isAtStart = carousel.scrollLeft <= 5;
        const isAtEnd = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 5;

        leftArrow.disabled = isAtStart;
        rightArrow.disabled = isAtEnd;
    }

    // Initial check on page load
    updateArrowState();
    
    // Update arrow state on window resize
    window.addEventListener('resize', updateArrowState);

    // Event listener for the right arrow
    rightArrow.addEventListener('click', () => {
        if (!firstCard) return;
        // Calculate the scroll distance as one card width + the space between cards (space-x-6 = 24px)
        const scrollDistance = firstCard.offsetWidth + 24;
        carousel.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        });
    });

    // Event listener for the left arrow
    leftArrow.addEventListener('click', () => {
        if (!firstCard) return;
        // Calculate the scroll distance as one card width + the space between cards (space-x-6 = 24px)
        const scrollDistance = firstCard.offsetWidth + 24;
        carousel.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        });
    });

    // Update arrow state whenever the user scrolls manually
    carousel.addEventListener('scroll', updateArrowState);
});
