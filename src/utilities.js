// Function to generate the slide-in animation CSS
export const slideIn = (order) => {
	const easeInQuart = 'cubic-bezier(0.5, 0, 0.75, 0)';
	const delay = order * 200;

	return `animation: slide-in 300ms ${easeInQuart} ${delay}ms 1 backwards`;
};

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
export const isSafariOrFirefox =
	/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
	/firefox/i.test(navigator.userAgent);

// Function to load scroll timeline polyfill
export const loadScrollTimelinePolyfillIfNeeded = async () => {
	if (isSafariOrFirefox) {
		await import('./scroll-timeline');
	}
};
