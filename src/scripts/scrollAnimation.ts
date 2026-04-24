export function initScrollAnimation() {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -80px 0px", // trigger sebelum elemen fully visible
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        // Uncomment baris ini jika animasi hanya mau jalan sekali:
        // observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("animate-in"); // replay saat scroll balik
      }
    });
  }, observerOptions);

  // Observe semua elemen dengan atribut data-animate
  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
}