document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const menuBurger = document.querySelector('.menu-burger');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBurger && navMenu) {
        menuBurger.addEventListener('click', () => {
            const isExpanded = menuBurger.getAttribute('aria-expanded') === 'true';
            menuBurger.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && navMenu) {
            navMenu.style.display = '';
            if (menuBurger) {
                menuBurger.setAttribute('aria-expanded', 'false');
            }
        }
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    if (filterButtons.length > 0 && eventCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                eventCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(inquiryForm);
            const name = formData.get('name');
            const session = formData.get('session');

            alert(`Thank you, ${name}! Your inquiry for a "${session}" session has been received. We will contact you soon.`);
            inquiryForm.reset();
        });
    }
});