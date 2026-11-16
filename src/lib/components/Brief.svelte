<script lang="ts">
	import { briefEmail, briefMailto, emptyBrief } from '#lib/brief.ts';
	import { haves, services, timings } from '#lib/content/site.ts';

	// The visitor fills this in; the email on the left rewrites itself as they go.
	const brief = $state({ ...emptyBrief, have: [] as string[] });
	const email = $derived(briefEmail(brief));
	const mailto = $derived(briefMailto(brief));
</script>

<section id="brief" class="md:grid md:grid-cols-12" aria-labelledby="brief-title">
	<div
		class="sticky top-0 z-[1] flex h-[42svh] items-start justify-center overflow-hidden bg-surface p-4 md:col-span-6 md:h-svh md:items-center md:p-8"
	>
		<div
			data-ui
			class="w-full max-w-[420px] bg-paper p-6 text-paper-ink"
			aria-live="polite"
			aria-label="Your brief, as the email it will become"
		>
			<p class="caption-2">To: Marlon Baatjes</p>
			<p class="title-3 mt-1">{email.subject}</p>
			<p class="body-3 mt-4 whitespace-pre-line">{email.body}</p>
		</div>
	</div>

	<div class="frame flex flex-col gap-24 py-24 md:col-span-5 md:col-start-8">
		<div>
			<h2 id="brief-title" class="heading-2" data-reveal>What I can build for you</h2>
			<p class="body-lg mt-6 max-w-[44ch] text-muted" data-reveal style="--i: 1">
				Answer four questions and your brief writes itself. It opens in your own email app, so you
				can read it before you send it.
			</p>
		</div>

		<fieldset data-reveal>
			<legend class="heading-4">What do you need?</legend>
			<div class="mt-6 flex flex-col gap-0.5">
				{#each services as service (service.id)}
					<label class="choice">
						<input type="radio" name="service" value={service.id} bind:group={brief.service} />
						<span>
							<span class="title-2 block">{service.label}</span>
							<span class="body-3 mt-1 block text-muted">{service.detail}</span>
						</span>
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset data-reveal>
			<legend class="heading-4">What do you already have?</legend>
			<p class="body-3 mt-3 max-w-[44ch] text-muted">
				Starting from nothing is fine. If something exists, I build on it and do not replace it.
			</p>
			<div class="mt-6 grid gap-0.5 sm:grid-cols-2">
				{#each haves as have (have.id)}
					<label class="choice">
						<input type="checkbox" name="have" value={have.id} bind:group={brief.have} />
						<span class="title-3">{have.label}</span>
					</label>
				{/each}
			</div>
		</fieldset>

		<fieldset data-reveal>
			<legend class="heading-4">When do you need it?</legend>
			<p class="body-3 mt-3 max-w-[44ch] text-muted">
				Tell me your date. I will say whether I can meet it before we agree on anything.
			</p>
			<div class="mt-6 grid gap-0.5 sm:grid-cols-3">
				{#each timings as timing (timing.id)}
					<label class="choice">
						<input type="radio" name="timing" value={timing.id} bind:group={brief.timing} />
						<span class="title-3">{timing.label}</span>
					</label>
				{/each}
			</div>
		</fieldset>

		<div data-reveal>
			<h3 class="heading-4">Tell me about it</h3>
			<div class="mt-6 flex flex-col gap-4">
				<label class="flex flex-col gap-2">
					<span class="caption-1">Your name</span>
					<input class="field" type="text" autocomplete="name" bind:value={brief.name} />
				</label>
				<label class="flex flex-col gap-2">
					<span class="caption-1">The job, in a few sentences</span>
					<textarea class="field" rows="4" bind:value={brief.details}></textarea>
				</label>
				<a class="btn btn-wide self-start" href={mailto}>Open the brief in my email</a>
			</div>
		</div>
	</div>
</section>

<style>
	.choice {
		display: flex;
		min-height: 2.75rem;
		cursor: pointer;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1rem;
		background: var(--color-surface);
		transition: opacity 300ms var(--ease-settle);
	}

	.choice:hover {
		opacity: 0.85;
	}

	.choice:has(input:checked) {
		background: var(--color-raise);
	}

	.choice:has(input:focus-visible) {
		outline: 2px solid var(--color-ink);
		outline-offset: 3px;
	}

	.choice input {
		margin-top: 0.25rem;
		width: 1rem;
		height: 1rem;
		flex: none;
		accent-color: var(--color-accent);
	}

	.field {
		width: 100%;
		padding: 0.75rem;
		background: var(--color-surface);
		color: var(--color-ink);
		font: inherit;
	}

	.field:focus-visible {
		background: var(--color-raise);
	}
</style>
