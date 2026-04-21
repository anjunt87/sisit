export function initMobileMenu() {
  const btn = document.getElementById('mobileMenuButton')
  const menu = document.getElementById('mobileMenu')
  if (!btn || !menu) return

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })
}