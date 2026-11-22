// Runs before first paint to avoid a flash of the wrong theme.
const storageKey = 'theme-preference';

// Storage can throw when blocked (private mode, disabled site data).
let storedTheme;
try {
	storedTheme = localStorage.getItem(storageKey);
} catch {
	storedTheme = null;
}

const savedTheme =
	storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the selected theme to the document
document.documentElement.setAttribute('data-theme', savedTheme);

// Save the determined theme preference if it's not already saved
if (!storedTheme) {
	try {
		localStorage.setItem(storageKey, savedTheme);
	} catch {
		// Ignore: the preference just won't persist across visits.
	}
}

// Generate a random hue value once before paint
const hue = Math.floor(Math.random() * 360);

// Apply the hue immediately to the document
document.documentElement.style.setProperty(
	savedTheme === 'dark' ? '--hue-on-dark' : '--hue-on-light',
	hue
);
