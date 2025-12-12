// Removes a specified class from all elements.
export const removeClass = (className) => {
	const elements = document.querySelectorAll(`.${className}`);

	for (const element of elements) {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		}
	}
};

// Checks if the browser is Firefox.
export const isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);

// Loads the scroll timeline polyfill if needed.
export const loadScrollTimelinePolyfillIfNeeded = async () => {
	if (isFirefox) {
		await import('./scroll-timeline');
	}
};

// Generates a random hue value between 0 and 359.
export const randomHue = () => Math.floor(Math.random() * 360);

// Sets the theme hue based on the theme type.
export const applyThemeHue = (theme, hue) => {
	document.documentElement.style.setProperty(
		theme === 'dark' ? '--hue-on-dark' : '--hue-on-light',
		hue
	);
};
