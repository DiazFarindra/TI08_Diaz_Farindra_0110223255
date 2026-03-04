const path = window.location.pathname.replace(/\/$/, '') || '/index.html'

const navItems = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'))
navItems.forEach((link) => {
  const href = link.getAttribute('href')?.replace(/\/$/, '')
  if (!href) return

  if (path.endsWith(href) || (path === '/' && href === 'index.html')) {
    link.classList.add('nav-link-active')
    link.setAttribute('aria-current', 'page')
  }
})

const yearTarget = document.querySelector<HTMLElement>('[data-year]')
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear())
}
