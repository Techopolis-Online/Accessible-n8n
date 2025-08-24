import FormBox from './FormBox.vue';
import { createComponentRenderer } from '../../__tests__/render';

const render = createComponentRenderer(FormBox);

describe('FormBox', () => {
	it('should render the component', () => {
		const { container } = render({
			props: {
				title: 'Title',
				inputs: [
					{
						name: 'name',
						properties: {
							label: 'Name',
							type: 'text',
							required: true,
							showRequiredAsterisk: true,
							validateOnBlur: false,
							autocomplete: 'email',
							capitalize: true,
							labelSize: 'small',
							tagSize: 'small',
						},
					},
					{
						name: 'email',
						properties: {
							label: 'Email',
							type: 'email',
							required: true,
							showRequiredAsterisk: true,
							validateOnBlur: false,
							autocomplete: 'email',
							capitalize: true,
							labelSize: 'medium',
							tagSize: 'medium',
						},
					},
					{
						name: 'password',
						properties: {
							label: 'Password',
							type: 'password',
							required: true,
							showRequiredAsterisk: true,
							validateOnBlur: false,
							autocomplete: 'current-password',
							capitalize: true,
						},
					},
				],
			},
		});
		expect(container).toMatchSnapshot();
	});

	it('should render heading as h1 tag for accessibility', () => {
		const { container } = render({
			props: {
				title: 'Set up owner account',
				inputs: [],
			},
		});
		
		// Check that the heading is rendered as h1 element for accessibility
		const heading = container.querySelector('h1');
		expect(heading).toBeTruthy();
		expect(heading?.textContent?.trim()).toBe('Set up owner account');
	});

	it('should associate form labels with inputs properly', () => {
		const { container } = render({
			props: {
				title: 'Form Test',
				inputs: [
					{
						name: 'email',
						properties: {
							label: 'Email Address',
							type: 'email',
							required: true,
						},
					},
				],
			},
		});
		
		// Check that label has for attribute matching input name
		const label = container.querySelector('label[for="email"]');
		const input = container.querySelector('input[name="email"]');
		
		expect(label).toBeTruthy();
		expect(input).toBeTruthy();
		expect(label?.getAttribute('for')).toBe('email');
		expect(input?.getAttribute('name')).toBe('email');
	});
});
