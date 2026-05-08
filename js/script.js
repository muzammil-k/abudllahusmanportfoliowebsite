document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        
        cursor.style.transform = `translate(${x}px, ${y}px)`;
        cursorBlur.style.left = `${x}px`;
        cursorBlur.style.top = `${y}px`;
    });

    // Cursor hover effects
    const interactiveElements = document.querySelectorAll('a, .project-card, .btn-large');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `${cursor.style.transform} scale(4)`;
            cursor.style.background = 'rgba(255, 255, 255, 0.1)';
            cursor.style.backdropFilter = 'blur(4px)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(4)', '');
            cursor.style.background = '#fff';
            cursor.style.backdropFilter = 'none';
        });
    });

    // 2. Parallax Effect (Scroll & Mouse)
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    // Mouse Parallax for Hero
    document.querySelector('#hero').addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (x - centerX) / 50;
        const moveY = (y - centerY) / 50;

        parallaxLayers.forEach(layer => {
            const speed = layer.classList.contains('bg') ? 0.5 : 1.5;
            layer.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });

    // Scroll Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxLayers.forEach(layer => {
            const speed = layer.classList.contains('bg') ? 0.3 : 0.6;
            layer.style.top = `${scrolled * speed}px`;
        });
    });

    // 3. 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 10;
            const rotateY = (x - centerX) / 10;
            
            card.querySelector('.card-inner').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.card-inner').style.transform = `rotateX(0) rotateY(0)`;
        });
    });

    // 4. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
