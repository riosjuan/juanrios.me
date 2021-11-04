export const slideIn = (order) => {
	const easeInQuart = 'cubic-bezier(0.5, 0, 0.75, 0)';
	let delay;
	delay = order++ * 200;
	return `animation: slide-in 300ms ${easeInQuart} ${delay}ms 1 backwards`;
};

export const capitalize = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const removeNoJSClass = () => {
	const elements = document.querySelectorAll('.no-js');
	elements.forEach((element) => {
		element.classList.remove('no-js');
	});
};
