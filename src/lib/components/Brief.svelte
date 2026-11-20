<script lang="ts">
	import { briefEmail, briefMailto, emptyBrief } from '#lib/brief.ts';
	import { haves, services, timings } from '#lib/content/site.ts';

	// The preview and email link reflect the same draft.
	const brief = $state({ ...emptyBrief, have: [] as string[] });
	const email = $derived(briefEmail(brief));
	const mailto = $derived(briefMailto(brief));
</script>

<section id="brief" class="bg-cobalt text-white" aria-labelledby="brief-title">
	<div class="frame section-pad">
		<h2 id="brief-title" class="heading-2">Start a project brief</h2>
		<p class="body-lg mt-4 max-w-[52ch] text-bright-muted">
			Answer four questions and your brief writes itself. It opens in your own email app, so you can
			read it before you send it.
		</p>

		<div class="brief-grid mt-10">
			<div class="grid min-w-0 gap-9">
				<fieldset>
					<legend class="title-2">What do you need?</legend>
					<div class="mt-6 flex flex-col gap-1">
						{#each services as service (service.id)}
							<label class="choice">
								<input type="radio" name="service" value={service.id} bind:group={brief.service} />
								<span>
									<span class="title-2 block">{service.label}</span>
									<span class="mt-1 block text-bright-muted">{service.detail}</span>
								</span>
							</label>
						{/each}
					</div>
				</fieldset>

				<fieldset>
					<legend class="title-2">What do you already have?</legend>
					<p class="mt-3 max-w-[44ch] text-bright-muted">
						Starting from nothing is fine. If something exists, I build on it and do not replace it.
					</p>
					<div class="mt-6 grid gap-1 sm:grid-cols-2">
						{#each haves as have (have.id)}
							<label class="choice">
								<input type="checkbox" name="have" value={have.id} bind:group={brief.have} />
								<span class="title-3">{have.label}</span>
							</label>
						{/each}
					</div>
				</fieldset>

				<fieldset>
					<legend class="title-2">When do you need it?</legend>
					<p class="mt-3 max-w-[44ch] text-bright-muted">
						Tell me your date. I will say whether I can meet it before we agree on anything.
					</p>
					<div class="mt-6 grid gap-1 lg:grid-cols-3">
						{#each timings as timing (timing.id)}
							<label class="choice">
								<input type="radio" name="timing" value={timing.id} bind:group={brief.timing} />
								<span class="title-3">{timing.label}</span>
							</label>
						{/each}
					</div>
				</fieldset>

				<div>
					<h3 class="title-2">Tell me about it</h3>
					<div class="mt-6 flex flex-col gap-4">
						<label class="flex flex-col gap-2">
							<span class="caption-1">Your name</span>
							<input class="field" type="text" autocomplete="name" bind:value={brief.name} />
						</label>
						<label class="flex flex-col gap-2">
							<span class="caption-1">The job, in a few sentences</span>
							<textarea class="field" rows="4" bind:value={brief.details}></textarea>
						</label>
					</div>
				</div>
			</div>
			<div class="preview">
				<div
					class="border border-line bg-paper text-ink"
					role="region"
					aria-label="Your brief, as the email it will become"
				>
					<p class="meta border-b border-line px-5 py-3 text-muted">Email preview</p>
					<div class="p-5 sm:p-6">
						<p class="caption-2 text-muted">To: Marlon Baatjes</p>
						<p class="title-3 mt-1 wrap-anywhere">{email.subject}</p>
						<p class="mt-4 wrap-anywhere whitespace-pre-line">{email.body}</p>
					</div>
				</div>
				<div class="mt-5">
					<a class="btn btn-bright self-start" href={mailto}
						>Open the brief in my email<span class="arrow" aria-hidden="true"></span></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.brief-grid {
		display: grid;
		align-items: start;
		gap: clamp(2rem, 5vw, 5rem);
	}

	@media (width >= 52rem) {
		.brief-grid {
			grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		}
		.preview {
			position: sticky;
			top: 1.5rem;
		}
	}

	.choice {
		display: flex;
		min-height: 2.75rem;
		cursor: pointer;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.8rem 1rem;
		border: 1px solid var(--color-blue-line);
	}

	.choice:hover,
	.choice:has(input:checked) {
		border-color: var(--color-citron);
	}

	.choice:has(input:focus-visible) {
		outline: 2px solid var(--color-citron);
		outline-offset: 2px;
	}

	.choice input {
		margin-top: 0.2rem;
		width: 1rem;
		height: 1rem;
		flex: none;
		accent-color: var(--color-citron);
	}

	.field {
		width: 100%;
		padding: 0.75rem;
		background: var(--color-paper);
		color: var(--color-ink);
		font: inherit;
		outline-color: var(--color-citron);
	}

	@media (prefers-color-scheme: dark) {
		.field {
			box-shadow: inset 0 0 0 1px var(--color-blue-line);
		}
	}
</style>
