
// Función principal de inicialización
function initRDL() {
    console.log("RDL Script Iniciado");

    // 1. CAROUSEL
    const track = document.querySelector('.carousel-track');
    if (track) {
        const images = track.querySelectorAll('img');
        const btnPrev = document.querySelector('.carousel-btn-prev');
        const btnNext = document.querySelector('.carousel-btn-next');
        const dotsContainer = document.querySelector('.carousel-dots');
        let currentIndex = 0;

        if (dotsContainer) {
            images.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            });
        }

        const dots = document.querySelectorAll('.carousel-dot');
        function goToSlide(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[currentIndex]) dots[currentIndex].classList.add('active');
        }

        if (btnNext) btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            goToSlide(currentIndex);
        });
        if (btnPrev) btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            goToSlide(currentIndex);
        });
    }

    // 2. DROPDOWNS (LA CLAVE) - Usamos delegación para máxima seguridad
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (trigger && menu) {
            trigger.onclick = function(e) {
                console.log("Click en dropdown detectado");
                e.preventDefault();
                e.stopPropagation();

                // Cerrar otros
                dropdowns.forEach(other => {
                    const otherMenu = other.querySelector('.dropdown-menu');
                    if (other !== dropdown && otherMenu) {
                        otherMenu.classList.remove('visible');
                    }
                });

                menu.classList.toggle('visible');
            };
        }
    });

    // 3. IDIOMAS
    const btnBases = document.querySelector('.btn-yellow');
    const btnLanguage = document.querySelectorAll('.btn-gray');
    if (btnBases) {
        btnBases.onclick = function(e) {
            e.preventDefault();
            btnLanguage.forEach(btn => btn.classList.toggle('visible'));
        };
    }

    // 4. STICKY HEADER
    const stickyHeader = document.querySelector('#sticky-header');
    const mainLogo = document.querySelector('.main-logo');
    const headerSection = document.querySelector('#header');

    if (headerSection && stickyHeader) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    stickyHeader.classList.add('visible');
                    if(mainLogo) mainLogo.classList.add('hidden');
                } else {
                    stickyHeader.classList.remove('visible');
                    if(mainLogo) mainLogo.classList.remove('hidden');
                }
            });
        }, { threshold: 0 });
        observer.observe(headerSection);
    }
}

// Ejecutar al cargar
window.onload = initRDL;
