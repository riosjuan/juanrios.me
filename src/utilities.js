// Function to remove class
export const removeClass = (className) => {
	const elements = document.querySelectorAll(`.${className}`);

	for (const element of elements) {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		}
	}
};

// Function to check if browser is safari or firefox
export const isFirefox = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);

// Function to load scroll timeline polyfill
export const loadScrollTimelinePolyfillIfNeeded = async () => {
	if (isFirefox) {
		await import('./scroll-timeline');
	}
};
