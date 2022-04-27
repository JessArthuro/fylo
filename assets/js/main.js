// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.intro .intro-img, .about-txt`)
sr.reveal(`.intro .title`, {delay: 500})
sr.reveal(`.intro .description`, {delay: 600})
sr.reveal(`.btn-intro`, {delay: 800, origin: 'bottom'})
sr.reveal(`.feature_one, .feature_three`, {origin: 'left'})
sr.reveal(`.feature_two, .feature_four`, {origin: 'right'})
sr.reveal(`.testimonial-content`, {delay: 500})
sr.reveal(`.about-img, .email-signup`, {origin: 'bottom'})
sr.reveal(`.footer-content`, {delay: 600, interval: 200})
