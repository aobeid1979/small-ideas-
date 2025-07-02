// Get all panel elements
const panels = document.querySelectorAll('.panel');

// Add click event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove active class from all panels
        removeActiveClasses();
        
        // Add active class to clicked panel
        panel.classList.add('active');
    });
});

// Function to remove active class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const activePanel = document.querySelector('.panel.active');
    const currentIndex = Array.from(panels).indexOf(activePanel);
    
    if (e.key === 'ArrowRight' && currentIndex < panels.length - 1) {
        removeActiveClasses();
        panels[currentIndex + 1].classList.add('active');
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        removeActiveClasses();
        panels[currentIndex - 1].classList.add('active');
    }
});

// Optional: Auto-cycle through panels (uncomment to enable)
/*
let currentPanelIndex = 0;
setInterval(() => {
    removeActiveClasses();
    panels[currentPanelIndex].classList.add('active');
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;
}, 5000); // Change panel every 5 seconds
*/
