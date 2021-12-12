import Handlebars from 'handlebars/dist/handlebars';
import Block from '../block';
import buttonTemplate from './button.tmpl';

export default class Button extends Block {
	constructor(props: {
    id: string;
    text: string;
    type: string;
    className: string;
  }) {
		super('div', props);
	}

	render() {
		const template = Handlebars.compile(buttonTemplate);
		return template(this.props);
	}
}