import './styles/style.scss';
import bgStar from './assets/images/bg-stars.svg';

console.log("Hello world");

const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.innerText = "Hello beautiful world!!~";

app.appendChild(h1);

const img = document.createElement('img');
img.src = bgStar;
img.setAttribute('alt', 'Bg-star');
app.appendChild(img);
