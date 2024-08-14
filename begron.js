// Mendapatkan elemen header
const header = document.querySelector('header');

// Fungsi untuk mengubah kelas header saat scroll
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);