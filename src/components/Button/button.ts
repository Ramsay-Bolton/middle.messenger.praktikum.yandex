import Block from '../block';
import buttonTemplate from './button.tmpl';

export default class Button extends Block {
  constructor(props: { text: string; type: string; className: string }) {
    super(buttonTemplate, props);
  }
}
