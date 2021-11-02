export const slideIn = (order) => {
	const easeInQuart = 'cubic-bezier(0.5, 0, 0.75, 0)';
	let delay;
	delay = order++ * 200;
	return `animation: slide-in 300ms ${easeInQuart} ${delay}ms 1 backwards`;
};
