export function initBackToTop() {
  const btn = document.getElementById('backToTop')
  if (!btn) return

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      btn.style.opacity = '1'
      btn.classList.add('flex')
      btn.classList.remove('pointer-events-none')
    } else {
      btn.style.opacity = '0'
      btn.classList.remove('flex')
      btn.classList.add('pointer-events-none')
    }
  })
}

