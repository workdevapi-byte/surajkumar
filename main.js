/**
 * Suraj Kumar Portfolio - Main Script
 * Handles interactivity, animations, and icons.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll('.section-reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: reset if you want it to re-animate on scroll up
                // entry.target.style.opacity = '1'; 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Navbar Sticky Effect & Scroll Progress (Optional)
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-2xl', 'bg-black/80');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('shadow-2xl', 'bg-black/80');
            navbar.classList.add('bg-transparent');
        }
    });

    // 4. Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Hero Parallax Effect (Subtle)
    const hero = document.getElementById('about');
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPositionY = `${scroll * 0.5}px`;
        }
    });

    // 6. Form Submission (Dummy logic or feedback)
    const contactLinks = document.querySelectorAll('a[href^="mailto:"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Opening mail client...');
            // You could add a small toast notification here
        });
    });
});
