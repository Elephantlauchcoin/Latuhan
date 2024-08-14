document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua radio button dan slide
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    const slides = document.querySelector('.slides');
    
    // Fungsi untuk mengupdate slider berdasarkan radio button yang dipilih
    function updateSlider() {
        const checkedRadio = document.querySelector('input[name="radio-btn"]:checked');
        const index = Array.from(radios).indexOf(checkedRadio);
        
        // Mengatur posisi slide berdasarkan index radio button yang dipilih
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
    
    // Tambahkan event listener untuk setiap radio button
    radios.forEach(radio => {
        radio.addEventListener('change', updateSlider);
    });
    
    // Fungsi untuk navigasi otomatis
    function autoSlide() {
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % radios.length;
            radios[currentIndex].checked = true;
            updateSlider();
        }, 5000); // Ganti slide setiap 5 detik
    }
    
    // Mulai navigasi otomatis
    autoSlide();
});