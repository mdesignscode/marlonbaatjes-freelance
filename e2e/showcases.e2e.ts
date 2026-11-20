import { expect, test } from '@playwright/test';

const showcases = [
	{ slug: 'spots', title: 'Spots', duration: 20 },
	{ slug: 'trivia-mania', title: 'Trivia Mania', duration: 20 },
	{ slug: 'random-stuff', title: 'Random Stuff', duration: 21 }
];

for (const showcase of showcases) {
	test(`${showcase.title} plays its showcase on the case study`, async ({ page }) => {
		await page.goto(`/work/${showcase.slug}`);
		const path = `/showcases/${showcase.slug}/brag`;
		const video = page.getByLabel(`${showcase.title} showcase`);

		await expect(video).toBeVisible();
		await expect(video).toHaveAttribute('poster', `${path}.jpg`);
		await expect(video).toHaveAttribute('preload', 'none');
		await expect(video).toHaveJSProperty('controls', true);
		await expect(video).toHaveJSProperty('paused', true);

		const captions = await page.request.get(`${path}.vtt`);
		expect(captions.ok()).toBe(true);
		expect(await captions.text()).toMatch(/^WEBVTT/);

		await video.evaluate(async (player: HTMLVideoElement) => {
			player.muted = true;
			await player.play();
		});
		expect(
			new URL(await video.evaluate((player: HTMLVideoElement) => player.currentSrc)).pathname
		).toBe(`${path}.mp4`);
		await expect(video).toHaveJSProperty('videoWidth', 1920);
		await expect(video).toHaveJSProperty('videoHeight', 1080);
		await expect(video).toHaveJSProperty('duration', showcase.duration);
		await expect
			.poll(() => video.evaluate((player: HTMLVideoElement) => player.currentTime))
			.toBeGreaterThan(0);
	});
}
