import './error.css';
import sidebarLogoImage from '../../../static/images/logo.png'
import sidebarBackImage from '../../../static/images/arrow-back.png'
import Block from '../../components/block';
import errorTemplate from './error.tmpl';

export default class Error extends Block {
	constructor(props: { code: string; info: string }) {
		super(errorTemplate, {
			sidebarLogoImage: sidebarLogoImage,
			sidebarBackImage: sidebarBackImage,
			...props,
		});
	}
}