/* abre e fecha o menu qndo clicar no icone: hamburgue e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* qndo clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da pag qndo der scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
  // scroll é maior que a altura do header        
  header.classList.add('scroll')
  } else {
  // menor que a altura do header
  header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
     el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true
})

/* ScrollReveal: mostrar elementos qnd der scroll na pag */
const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/* Botão voltar para o top */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')        
    } else {
        backToTopButton.classList.remove('show')
    }
})
