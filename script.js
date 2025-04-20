// Loader functionality
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// Mobile Menu Toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuContent = document.querySelector('.mobile-menu-content');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    // Function to open mobile menu
    const openMobileMenu = () => {
        mobileMenuToggle.classList.add('active');
        mobileMenuContent.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    };
    
    // Function to close mobile menu
    const closeMobileMenu = () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenuContent.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    };
    
    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking on nav links (optional)
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuContent.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});