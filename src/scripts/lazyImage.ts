export function initLazyImage() {
  if (!('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      }
    })
  })

  document.querySelectorAll<HTMLImageElement>('img[data-src]').forEach(img => {
    observer.observe(img)
  })
}