
//HERO CAROUSEL ================================= //
const track = document.querySelector('.carousel-track')
const images = document.querySelectorAll('.carousel-track img')
const btnPrev = document.querySelector('.carousel-btn-prev')
const btnNext = document.querySelector('.carousel-btn-next')
const dotsContainer = document.querySelector('.carousel-dots')


//NAV
const nav = document.querySelector('nav');
const bird = document.querySelector('#menu img');
const header = document.querySelector('#header');

// Cambiar color nav y mostrar bird
if (header && nav) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('color')
                bird.style.opacity = '1'
            } else {
                nav.classList.remove('color')
                bird.style.opacity = '0'
            }
        });
    }, { threshold: 0, rootMargin: '-200px 0px 0px 0px' })
    observer.observe(header)
} else {
    // Si no hay logo, mostrar directo nav con bird
    nav.classList.add('color')
    bird.style.opacity = '1'
}

// Marcar en qué sección estoy con underline
const navLinks = document.querySelectorAll('#menu a')
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active')
    }
})

//CAROUSEL
let currentIndex = 0
const totalSlides = images.length

// Crear dots
images.forEach((_, i) => {
    const dot = document.createElement('button')
    dot.classList.add('carousel-dot')
    if (i === 0) dot.classList.add('active')
    dot.addEventListener('click', () => goToSlide(i))
    dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.carousel-dot')

function goToSlide(index) {
    currentIndex = index
    track.style.transform = `translateX(-${currentIndex * 100}%)`
    // Actualizar dots
    dots.forEach(dot => dot.classList.remove('active'))
    dots[currentIndex].classList.add('active')
}

btnNext.addEventListener('click', () => {
    const nextIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0
    goToSlide(nextIndex)
})

btnPrev.addEventListener('click', () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1
    goToSlide(prevIndex)
})

// Touch swipe (solo se activa si el gesto es horizontal)
let touchStartX = 0
let touchStartY = 0

const carousel = document.querySelector('#hero-carousel')
carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
}, { passive: true })

carousel.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX
    const dy = e.changedTouches[0].clientY - touchStartY
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) {
        goToSlide(currentIndex < totalSlides - 1 ? currentIndex + 1 : 0)
    } else {
        goToSlide(currentIndex > 0 ? currentIndex - 1 : totalSlides - 1)
    }
}, { passive: true })

// ================================= //


// BOTONES ================================= //
const btnBases = document.querySelector('.btn-yellow')
const btnLanguage = document.querySelectorAll('.btn-gray')

btnBases.addEventListener('click', function () {
    btnLanguage.forEach(btn => btn.classList.toggle('visible'))
})
// ================================= //

