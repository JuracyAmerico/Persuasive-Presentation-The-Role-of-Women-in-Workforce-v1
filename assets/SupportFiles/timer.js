// Timer fragment function
document.addEventListener('DOMContentLoaded', function () {
    const fragments = document.querySelectorAll('.fragment-timer');
    
    fragments.forEach((fragment) => {
        const delay = fragment.getAttribute('data-delay');
        setTimeout(() => {
            fragment.classList.add('visible');
            fragment.classList.add('fragment'); // Ensure the fragment behavior is respected by reveal.js
        }, delay);
    });
});
