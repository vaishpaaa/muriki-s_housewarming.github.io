// Function to enable smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target section ID
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll smoothly to the target element
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});