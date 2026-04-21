export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('form')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Terima kasih! Pesan Anda telah terkirim.')
    form.reset()
  })
}