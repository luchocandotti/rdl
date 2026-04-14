
const btnBases = document.querySelector('.btn-yellow')
const btnLanguage = document.querySelectorAll('.btn-gray')

btnBases.addEventListener('click', function () {
    btnLanguage.forEach(btn => btn.classList.toggle('visible'))
})