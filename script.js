document.addEventListener('DOMContentLoaded', () => {

    // Select the main elements from your provided HTML structure
    const header = document.querySelector('.navbar');
    const navList = document.querySelector('.navbar nav ul'); // Selects the <ul> element inside <nav>
    
    // Select an existing element to act as a *temporary* toggle switch
    // WARNING: This is only for demonstration and is NOT good UX/design.
    const tempToggleTarget = document.querySelector('.logo-circle');

    // ==========================================================
    // 1. Temporary Mobile Menu Toggle Logic (Using Logo as Switch)
    //    * This section will apply the necessary class to the menu <ul>
    //      when the logo is clicked. You need to inspect element to see the change.
    // ==========================================================
    
    if (tempToggleTarget && navList) {
        tempToggleTarget.style.cursor = 'pointer'; // Make it feel clickable
        
        tempToggleTarget.addEventListener('click', () => {
            // Toggles the 'nav-open' class on the navigation list (<ul>).
            // You will need CSS rules in 'style.css' to make this visible on mobile sizes,
            // but since you can't change the CSS, this change will only be visible in the console/inspector.
            navList.classList.toggle('nav-open');
            console.log("Mobile Menu Logic Triggered. 'nav-open' class toggled on <ul> element.");
        });

        // Add logic to close the menu if a link is clicked
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently "open" before closing
                if (navList.classList.contains('nav-open')) {
                    navList.classList.remove('nav-open');
                }
            });
        });
    } else {
        console.warn("Could not find required elements for menu toggle.");
    }


    // ==========================================================
    // 2. Smooth Scrolling for Navigation Links
    //    * This enhances the user experience for anchor links.
    // ==========================================================

    // Select all links that start with '#' (internal anchors)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default jump action only for links in the main nav/footer
            // We exclude the .btn-primary links for faster jump, or you can remove this check
            if (!this.classList.contains('btn-primary')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Scroll smoothly into view (using the native smooth behavior if available)
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    console.log(`Smooth scroll initiated for: ${targetId}`);
                }
            }
        });
    });

    // ==========================================================
    // 3. Sticky Header Enhancement (Adding a Shadow/Style on Scroll)
    // ==========================================================

    if (header) {
        // Function to check scroll position and add/remove class
        const checkScroll = () => {
            if (window.scrollY > 50) { // Check if scrolled down 50 pixels
                // The 'scrolled' class can be used in your CSS later for a border or shadow
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        // Run once on page load
        checkScroll();
        
        // Listen for scroll events
        window.addEventListener('scroll', checkScroll);
        console.log("Sticky Header logic initialized.");
    }

    console.log("Girls Who Code USM: script.js loaded successfully with smooth scroll and sticky header logic. Use the logo to test the menu toggle class.");
});