const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        accordionContent.classList.toggle('active');
    });
});

// Cabeçalho Tags
window.addEventListener('scroll', function() {
    const header = document.querySelector('header.topo-header');
    if (window.scrollY > 10) {
        header.classList.add('blur');
    } else {
        header.classList.remove('blur');
    }
});

// Cabeçalho Início
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-principal');
    if (window.scrollY > 10) {
        header.classList.add('blur');
    } else {
        header.classList.remove('blur');
    }
});
