 // Tema claro/oscuro
  const toggleBtn = document.getElementById('toggle-theme');

  toggleBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode')

    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDarkMode ? '🌙' : '🌞';
  });

  // Validación de formulario
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      message.textContent = "¡Gracias por suscribirte!";
      message.style.color = "green";
      message.style.fontSize = "1.5rem";
      emailInput.value = "";
    } else {
      message.textContent = "Ingresá un correo válido.";
      message.style.color = "red";
      message.style.fontSize = "1.5rem";
    }
  });
