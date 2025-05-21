// Mobil menü toggle işlevi
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Menü öğelerine tıklandığında menüyü kapat
    const mobileMenuItems = mobileMenu.querySelectorAll('a');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
} else {
    console.error("Mobil menü butonu veya menü elementi bulunamadı.");
}


// Geçerli yılı footer'a ekle
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
} else {
    console.error("Geçerli yıl span elementi bulunamadı.");
}