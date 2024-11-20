const toggleButton = document.getElementById('theme-toggle');

// Check if a theme is saved in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
  toggleButton.textContent = currentTheme === 'dark-theme' ? 'Light Theme' : 'Dark Theme';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Update button text
  const isDarkTheme = document.body.classList.contains('dark-theme');
  toggleButton.textContent = isDarkTheme ? 'Light Theme' : 'Dark Theme';

  // Save the theme to localStorage
  localStorage.setItem('theme', isDarkTheme ? 'dark-theme' : '');
});
