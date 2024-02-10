export const slideIn = (order) => {
	const easeInQuart = 'cubic-bezier(0.5, 0, 0.75, 0)';
	const delay = order * 200;

	return `animation: slide-in 300ms ${easeInQuart} ${delay}ms 1 backwards`;
};

export const removeClass = (className) => {
	const elements = document.querySelectorAll(`.${className}`);

	for (const element of elements) {
		if (element.classList.contains(className)) {
			element.classList.remove(className);
		}
	}
};
