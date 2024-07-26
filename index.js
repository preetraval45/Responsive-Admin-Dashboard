document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.querySelector('.theme-toggler');
    const lightModeIcon = themeToggler.querySelector('.light_mode');
    const darkModeIcon = themeToggler.querySelector('.dark_mode');
    const body = document.body;
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const aside = document.querySelector('aside');

    // Function to switch between light and dark themes
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Event listener for theme toggler
    themeToggler.addEventListener('click', toggleTheme);

    // Menu toggle functionality
    menuBtn.addEventListener('click', () => {
        aside.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        aside.classList.remove('active');
    });

    // Load saved theme from local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }
});