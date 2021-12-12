import './profile.css';
import profileTemplate from './profile.tmpl';
import Block from '../../components/block';
import profilePageData from './ProfilePageData';

export default class ProfilePage extends Block {
  constructor() {
    super(profileTemplate, profilePageData);
  }
}
