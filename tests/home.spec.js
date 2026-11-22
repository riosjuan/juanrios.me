import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const colorScheme of /** @type {const} */ (['light', 'dark'])) {
	test(`home page has no axe violations in ${colorScheme} theme`, async ({ page }) => {
		await page.emulateMedia({ colorScheme });
		await page.goto('/');

		await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
		await expect(page.locator('#work article').first()).toBeVisible();

		const results = await new AxeBuilder({ page }).analyze();
		expect(results.violations).toEqual([]);
	});

	// The theme hue is random per visit, so check contrast across the whole hue wheel.
	test(`colors meet contrast at every hue in ${colorScheme} theme`, async ({ page }) => {
		await page.emulateMedia({ colorScheme });
		await page.goto('/');

		for (let hue = 0; hue < 360; hue += 15) {
			await page.evaluate(
				([property, value]) => document.documentElement.style.setProperty(property, value),
				[colorScheme === 'dark' ? '--hue-on-dark' : '--hue-on-light', String(hue)]
			);

			const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
			const failures = results.violations.flatMap((violation) =>
				violation.nodes.map((node) => node.failureSummary)
			);
			expect(failures, `hue ${hue}`).toEqual([]);
		}
	});
}

test('skip link moves to main content', async ({ page }) => {
	await page.goto('/');
	await page.keyboard.press('Tab');

	const skipLink = page.getByRole('link', { name: 'Skip to content' });
	await expect(skipLink).toBeFocused();
	await expect(skipLink).toBeInViewport();
});

test('theme toggle switches theme', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'light' });
	await page.goto('/');

	const toggle = page.getByRole('button', { name: 'Dark theme' });
	await expect(toggle).toHaveAttribute('aria-pressed', 'false');
	await toggle.click();
	await expect(toggle).toHaveAttribute('aria-pressed', 'true');
	await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('unknown routes render the error page', async ({ page }) => {
	const response = await page.goto('/does-not-exist');
	expect(response?.status()).toBe(404);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page doesn’t exist.');
});
