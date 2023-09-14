const savedTheme = localStorage.getItem('theme-preference');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('theme-preference', theme);
