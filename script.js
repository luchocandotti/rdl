
//HERO CAROUSEL
const track = document.querySelector('.carousel-track')
const images = document.querySelectorAll('.carousel-track img')
const btnPrev = document.querySelector('.carousel-btn-prev')
const btnNext = document.querySelector('.carousel-btn-next')
const dotsContainer = document.querySelector('.carousel-dots')

let currentIndex = 0
const totalSlides = images.length
// Crear los puntitos (dots)
images.forEach((_, i) => {
    const dot = document.createElement('button')
    dot.classList.add('carousel-dot')
    if (i === 0) dot.classList.add('active')
    dot.addEventListener('click', () => goToSlide(i))
    dotsContainer.appendChild(dot)
});
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
});
btnPrev.addEventListener('click', () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1
    goToSlide(prevIndex)
});



// BOTONES 
const btnBases = document.querySelector('.btn-yellow')
const btnLanguage = document.querySelectorAll('.btn-gray')

btnBases.addEventListener('click', function (e) {
    e.preventDefault()
    btnLanguage.forEach(btn => btn.classList.toggle('visible'))
})

// NAV FLOTANTE (Ocultar hover y usar click)
const btnDropdown = document.querySelector('.dropdown > .nav-link')
const dropdownMenu = document.querySelector('.dropdown-menu')

if (btnDropdown && dropdownMenu) {
    btnDropdown.addEventListener('click', function (e) {
        e.preventDefault() // Evitamos que intente bajar la página de golpe
        dropdownMenu.classList.toggle('visible')
        btnDropdown.classList.toggle('active')
    })
}
