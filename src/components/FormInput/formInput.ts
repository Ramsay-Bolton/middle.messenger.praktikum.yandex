import Block from '../block';
import formInputTemplate from './formInput.tmpl';

export default class FormItem extends Block {
  constructor(props: {
    name: string;
    label: string;
    type: string;
    size?: number;
    placeholder?: string;
    value?: string;
    errorMessage?: string;
  }) {
    super(formInputTemplate, props);
  }
}
