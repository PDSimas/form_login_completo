function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = '🙈';
  } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = '👁️';
  }
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  body.classList.toggle('dark');
  themeToggle.style.transform = 'rotate(360deg)'; 
  setTimeout(() => {
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '🌜';
    } else {
        themeToggle.textContent = '🌞';
    }
    themeToggle.style.transform = 'rotate(0deg)';
  }, 500); 
}