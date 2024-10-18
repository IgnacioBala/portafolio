// theme-toggle.js

// Función para aplicar el tema
function applyTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

// Cargar tema guardado en localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

// Cambiar tema al hacer clic en el switch
document.querySelector('.switch input').addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage
});