import { haves, services, site, timings } from './content/site';

export type Brief = {
	service: string;
	have: string[];
	timing: string;
	name: string;
	details: string;
};

export const emptyBrief: Brief = {
	service: services[0].id,
	have: [],
	timing: timings[0].id,
	name: '',
	details: ''
};

const labelOf = (list: readonly { id: string; label: string }[], id: string) =>
	list.find((item) => item.id === id)?.label ?? list[0].label;

/** The brief as the email the visitor is about to send. */
export function briefEmail(brief: Brief): { subject: string; body: string } {
	const service = labelOf(services, brief.service);
	const have = haves.filter((item) => brief.have.includes(item.id)).map((item) => item.label);
	const name = brief.name.trim();
	const details = brief.details.trim();

	const lines = [
		'Hi Marlon,',
		'',
		`I need: ${service}`,
		`I already have: ${have.length ? have.join(', ') : 'Nothing yet'}`,
		`Timing: ${labelOf(timings, brief.timing)}`,
		'',
		details || '(Describe the job here in a few sentences.)',
		'',
		name || '(Your name)'
	];

	return {
		subject: name ? `Project brief from ${name}` : 'Project brief',
		body: lines.join('\n')
	};
}

/** A mailto link that opens the brief in the visitor's own email app. Nothing is sent to a server. */
export function briefMailto(brief: Brief): string {
	const { subject, body } = briefEmail(brief);
	return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
