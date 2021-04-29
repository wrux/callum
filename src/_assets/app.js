document.querySelectorAll('[toggle-dark-mode]').forEach((item) =>
  item.addEventListener('click', () => {
    localStorage.setItem('theme', localStorage.theme == 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  })
);
