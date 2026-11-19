// Removes a specified class from all elements.
export const removeClass = (className) => {
	const elements = document.querySelectorAll(`.${className}`);

	for (const element of elements) {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		}
	}
};

// Generates a random hue value between 0 and 359.
export const randomHue = () => Math.floor(Math.random() * 360);

// Sets the theme hue based on the theme type.
export const applyThemeHue = (theme, hue) => {
	const root = document.documentElement;

	if (theme === 'dark') {
		root.style.setProperty('--hue-on-dark', hue);
		root.style.removeProperty('--hue-on-light');
	} else {
		root.style.setProperty('--hue-on-light', hue);
		root.style.removeProperty('--hue-on-dark');
	}
};
