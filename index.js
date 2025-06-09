 // Tema claro/oscuro
  const toggleBtn = document.getElementById('toggle-theme');

  toggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode')

    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDarkMode ? '🌙' : '🌞';
  });
