// FinTech Noir Interactions
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dark Mode Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 2. Smooth Scroll & Active Link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counter if it's a metric
                if (entry.target.querySelector('.counter')) {
                    startCounters(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .hero-metrics').forEach(el => observer.observe(el));

    // 4. Staggered Hero Animation (Simulating Framer Motion)
    const heroElements = document.querySelectorAll('.reveal-stagger');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        }, 200 * (index + 1));
    });

    // 5. Number Counter Animation
    function startCounters(parent) {
        const counters = parent.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    // 6. Parallax Mouse Effect for Background
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const light1 = document.getElementById('light1');
        const light2 = document.getElementById('light2');
        
        if(light1 && light2) {
            light1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            light2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        }
    });

    // 7. Lucide Icons (Fallback if script tag fails)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 8. Contact Form (Formspree)
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (contactStatus) {
                contactStatus.textContent = 'Sending...';
                contactStatus.classList.remove('error');
            }

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { Accept: 'application/json' },
                });

                if (response.ok) {
                    contactStatus.textContent = 'Message sent. I\'ll get back soon!';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    const errorMsg = data.errors?.[0]?.message || 'Something went wrong. Try again?';
                    contactStatus.textContent = errorMsg;
                    contactStatus.classList.add('error');
                }
            } catch (error) {
                contactStatus.textContent = 'Unable to send right now. Please email me directly.';
                contactStatus.classList.add('error');
            }
        });
    }
});
