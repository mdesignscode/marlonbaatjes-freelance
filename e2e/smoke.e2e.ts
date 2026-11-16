import { expect, test } from '@playwright/test';

const pages = ['/', '/work/spots', '/work/trivia-mania', '/work/random-stuff', '/privacy'];

for (const path of pages) {
	test(`${path} loads with one heading and no console errors`, async ({ page }) => {
		const errors: string[] = [];
		page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
		page.on('pageerror', (error) => errors.push(error.message));

		const response = await page.goto(path);
		expect(response?.status()).toBe(200);
		await expect(page.locator('h1')).toHaveCount(1);
		await expect(page.locator('h1')).toBeVisible();
		expect(errors).toEqual([]);
	});
}

test('the brief rewrites its email as it is filled in', async ({ page }) => {
	await page.goto('/#brief');
	await page.getByLabel('A Python tool that automates a task').check();
	await page.getByLabel('Existing code').check();
	await page.getByLabel('Within a week').check();
	await page.getByLabel('Your name').fill('Gaynor');
	await page.getByLabel('The job, in a few sentences').fill('Invoices from my class list.');

	const email = page.getByLabel('Your brief, as the email it will become');
	await expect(email).toContainText('Project brief from Gaynor');
	await expect(email).toContainText('I need: A Python tool that automates a task');
	await expect(email).toContainText('I already have: Existing code');
	await expect(email).toContainText('Timing: Within a week');

	const href = await page
		.getByRole('link', { name: 'Open the brief in my email' })
		.getAttribute('href');
	expect(href).toContain('mailto:');
	expect(decodeURIComponent(href!)).toContain('Invoices from my class list.');
});

test('an unknown address shows the 404 page with a way back', async ({ page }) => {
	const response = await page.goto('/nope');
	expect(response?.status()).toBe(404);
	await expect(page.getByRole('link', { name: 'Go to the home page' })).toBeVisible();
});

test('no page scrolls sideways on a phone', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 812 });
	for (const path of pages) {
		await page.goto(path);
		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - document.documentElement.clientWidth
		);
		expect(overflow, path).toBeLessThanOrEqual(0);
	}
});

test('the keyboard reaches the skip link first, then the brief controls', async ({ page }) => {
	await page.goto('/');
	await page.keyboard.press('Tab');
	await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();

	await page.getByLabel('A website or web app').focus();
	await page.keyboard.press('ArrowDown');
	await expect(page.getByLabel('A Python tool that automates a task')).toBeChecked();
	await page.keyboard.press('Tab');
	await page.keyboard.press('Space');
	await expect(page.getByLabel('The words and pictures')).toBeChecked();
});
