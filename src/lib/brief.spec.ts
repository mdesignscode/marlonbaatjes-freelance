import { describe, expect, it } from 'vitest';
import { briefEmail, briefMailto, emptyBrief } from './brief';

describe('briefEmail', () => {
	it('writes a usable email from an untouched brief', () => {
		const { subject, body } = briefEmail(emptyBrief);
		expect(subject).toBe('Project brief');
		expect(body).toContain('I need: A website or web app');
		expect(body).toContain('I already have: Nothing yet');
		expect(body).toContain('Timing: No fixed date');
	});

	it('carries the visitor’s choices, name and details', () => {
		const { subject, body } = briefEmail({
			service: 'automation',
			have: ['code', 'content'],
			timing: 'week',
			name: '  Gaynor ',
			details: 'Turn my class list into invoices.'
		});
		expect(subject).toBe('Project brief from Gaynor');
		expect(body).toContain('I need: A Python tool that automates a task');
		expect(body).toContain('I already have: The words and pictures, Existing code');
		expect(body).toContain('Timing: Within a week');
		expect(body).toContain('Turn my class list into invoices.');
		expect(body.trimEnd().endsWith('Gaynor')).toBe(true);
	});

	it('falls back to the first option for an unknown id', () => {
		expect(briefEmail({ ...emptyBrief, service: 'nope' }).body).toContain(
			'I need: A website or web app'
		);
	});
});

describe('briefMailto', () => {
	it('encodes subject and body so line breaks and symbols survive', () => {
		const href = briefMailto({ ...emptyBrief, name: 'A & B', details: 'Line one\nLine two?' });
		expect(href.startsWith('mailto:')).toBe(true);
		const query = new URLSearchParams(href.split('?')[1]);
		expect(query.get('subject')).toBe('Project brief from A & B');
		expect(query.get('body')).toContain('Line one\nLine two?');
	});
});
