import './styles/style.scss';
import { InitTime } from './utils/InitTime';
import Social from './templates/Social';

const social = document.querySelector('.social-media');
social.innerHTML = Social();

let totalSeconds;

document.addEventListener('load', InitTime(totalSeconds));