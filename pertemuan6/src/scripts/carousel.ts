const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'))
const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-dot]'))
const prevBtn = document.querySelector<HTMLButtonElement>('[data-prev]')
const nextBtn = document.querySelector<HTMLButtonElement>('[data-next]')

if (slides.length > 0) {
  let index = 0
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const show = (target: number) => {
    index = (target + slides.length) % slides.length
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index)
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true')
    })

    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-base-900', i === index)
      dot.classList.toggle('bg-base-300', i !== index)
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`)
    })
  }

  prevBtn?.addEventListener('click', () => show(index - 1))
  nextBtn?.addEventListener('click', () => show(index + 1))

  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)))

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(index - 1)
    if (event.key === 'ArrowRight') show(index + 1)
  })

  show(0)

  if (!prefersReducedMotion) {
    setInterval(() => show(index + 1), 5000)
  }
}
