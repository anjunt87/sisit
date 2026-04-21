export function initSmoothScroll(menuId?: string) {
  const menu = menuId ? document.getElementById(menuId) : null

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href')!)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        menu?.classList.add('hidden')
      }
    })
  })
}