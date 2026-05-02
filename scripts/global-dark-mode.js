$(document).ready(function() {
    
    // Function to update the text of the theme button based on current language
    function updateThemeButtonText() {
        const isDark = $('body').hasClass('dark-mode');
        const isSpanish = $('body').hasClass('spanish-mode');

        if (isDark) {
            $('#darkModeToggle').text(isSpanish ? '☀️ Modo Claro' : '☀️ Light Mode');
        } else {
            $('#darkModeToggle').text(isSpanish ? '🌙 Modo Oscuro' : '🌙 Dark Mode');
        }
    }

    // ==========================================
    // 1. THEME LOGIC
    // ==========================================
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
    }

    $('#darkModeToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        localStorage.setItem('theme', $('body').hasClass('dark-mode') ? 'dark' : 'light');
        updateThemeButtonText();
    });

    // ==========================================
    // 2. LANGUAGE LOGIC
    // ==========================================
    if (localStorage.getItem('lang') === 'es') {
        $('body').addClass('spanish-mode');
        $('#langToggle').text('🌎 ENG');
    }

    $('#langToggle').on('click', function() {
        $('body').toggleClass('spanish-mode');
        
        if ($('body').hasClass('spanish-mode')) {
            $(this).text('🌎 ENG');
            localStorage.setItem('lang', 'es');
        } else {
            $(this).text('🌎 ESP');
            localStorage.setItem('lang', 'en');
        }
        updateThemeButtonText(); // Update the theme button language too!
    });

    // Run once on load to ensure buttons have correct text
    updateThemeButtonText(); 
});