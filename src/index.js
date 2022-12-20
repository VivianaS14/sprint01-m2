import './styles/style.scss';
import { InitTime } from './utils/InitTime';

const app = document.getElementById('app');
let totalSeconds;


document.addEventListener('load', InitTime(totalSeconds));