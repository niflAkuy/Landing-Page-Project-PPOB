document.addEventListener('DOMContentLoaded', function() {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the class 'reveal' or 'fade-in'
    const elementsToAnimate = document.querySelectorAll('.reveal, .fade-in');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

});

// Inisialisasi Swiper Slider untuk Testimoni
const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    grabCursor: true,
    
    // Mengatur jumlah slide yang tampil berdasarkan lebar layar
    breakpoints: {
      // untuk layar 320px ke atas
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // untuk layar 768px ke atas
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // untuk layar 1024px ke atas
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
  
    // Menambahkan titik navigasi
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});