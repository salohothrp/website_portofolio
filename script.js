document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            dropdownMenu.classList.toggle('active');
            // Menutup dropdown lain yang mungkin terbuka
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.querySelector('.dropdown-menu').classList.remove('active');
                }
            });
        });
    });

    // Menutup dropdown saat mengklik di luar dropdown
    document.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (!dropdown.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    });
});


// Tombol Back to Top
var backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

backToTopBtn.onclick = function() {
    // Animasi smooth scroll ke atas
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Tampilkan atau sembunyikan password
