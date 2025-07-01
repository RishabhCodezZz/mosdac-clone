document.addEventListener('DOMContentLoaded', function() {

    // Accessibility Functions
    const decreaseFont = document.querySelector('.decrease-font');
    const resetFont = document.querySelector('.reset-font');
    const increaseFont = document.querySelector('.increase-font');
    const highContrast = document.querySelector('.high-contrast');
    const normalContrast = document.querySelector('.normal-contrast');

    let currentFontSize = 100; // base font size percentage
    
    decreaseFont.addEventListener('click', function() {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });
    
    resetFont.addEventListener('click', function() {
        currentFontSize = 100;
        document.body.style.fontSize = '100%';
    });
    
    increaseFont.addEventListener('click', function() {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });
    
    highContrast.addEventListener('click', function() {
        document.body.classList.add('high-contrast');
        document.body.classList.remove('normal-contrast');
    });
    
    normalContrast.addEventListener('click', function() {
        document.body.classList.remove('high-contrast');
        document.body.classList.add('normal-contrast');
    });

    // Main Navigation Dropdown
    // Mobile-friendly dropdown handling
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle, .nested-dropdown-toggle');
    
    if (window.innerWidth <= 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                
                const parent = this.parentElement;
                const dropdown = parent.querySelector('.dropdown-menu, .nested-dropdown-menu');
                
                // Close other open dropdowns
                const allOpenDropdowns = document.querySelectorAll('.dropdown-menu, .nested-dropdown-menu');
                allOpenDropdowns.forEach(menu => {
                    if (menu !== dropdown && menu.style.display === 'block') {
                        menu.style.display = 'none';
                    }
                });
                
                // Toggle current dropdown
                if (dropdown) {
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }

    // Content Tab functionality
    const contentTabLinks = document.querySelectorAll('.tab-menu li a');
    
    contentTabLinks.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            contentTabLinks.forEach(t => {
                t.parentElement.classList.remove('active');
            });
            
            // Add active class to current tab
            this.parentElement.classList.add('active');
            
            // Here you would typically show the content associated with this tab
            // For this demo, we'll just log which tab was clicked
            console.log(`Tab clicked: ${this.getAttribute('href')}`);
        });
    });

    // Services Tab functionality
    const servicesTabLinks = document.querySelectorAll('.services-tab-menu li a');
    const servicesTabPanes = document.querySelectorAll('.services-tab-content .tab-pane');
    
    servicesTabLinks.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            servicesTabLinks.forEach(t => {
                t.parentElement.classList.remove('active');
            });
            
            // Hide all tab panes
            servicesTabPanes.forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Add active class to current tab
            this.parentElement.classList.add('active');
            
            // Show the corresponding tab pane
            const paneId = this.getAttribute('href');
            document.querySelector(paneId).classList.add('active');
        });
    });

    // Fullscreen button functionality
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    const satelliteImage = document.querySelector('.satellite-image img');
    
    if (fullscreenBtn && satelliteImage) {
        fullscreenBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (document.fullscreenElement) {
                // If already in fullscreen, exit
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }
            } else {
                // Enter fullscreen
                const container = document.querySelector('.satellite-image');
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.webkitRequestFullscreen) { /* Safari */
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) { /* IE11 */
                    container.msRequestFullscreen();
                }
            }
        });
    }
});
