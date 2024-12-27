document.addEventListener('DOMContentLoaded', () => {
  // Najdi všechna tlačítka kategorií
  const categoryButtons = document.querySelectorAll('.category-btn');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Najdi rodičovský <div> element
      const category = button.parentElement;
      const subcategory = category.querySelector('.subcategory');

      // Zkontroluj aktuální stav
      if (category.classList.contains('open')) {
        // Sbalení: nastav max-height na aktuální výšku a poté na 0 okamžitě
        subcategory.style.maxHeight = `${subcategory.scrollHeight}px`;
        requestAnimationFrame(() => {
          subcategory.style.maxHeight = '0';
        });
      } else {
        // Rozbalení: nastav max-height na skutečnou výšku
        subcategory.style.maxHeight = `${subcategory.scrollHeight}px`;

        // Po dokončení animace nastav max-height na "none", aby nebyla omezena
        subcategory.addEventListener(
          'transitionend',
          () => {
            if (category.classList.contains('open')) {
              subcategory.style.maxHeight = 'none';
            }
          },
          { once: true }
        );
      }

      // Přepni třídu 'open'
      category.classList.toggle('open');
    });
  });
});
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Skryjeme všechny slidy
    if (i === index) {
      slide.classList.add('active'); // Zobrazíme požadovaný slide
    }
  });
}

// Další slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Předchozí slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Události pro tlačítka
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatické přepínání slidů
//setInterval(nextSlide, 5000);

// Inicializace
showSlide(currentSlide);
