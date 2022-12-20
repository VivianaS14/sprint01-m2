import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pinterest from '../assets/images/icon-pinterest.svg';

const Social = () => {
    return `
        <ul class="social-list">
            <li><a href="https://www.facebook.com/" target="_blank"><img src=${facebook} alt="Facebook"></a></li>
            <li><a href="https://www.pinterest.com/" target="_blank"><img src=${instagram} alt="Facebook"></a></li>
            <li><a href="https://www.instagram.com/"  target="_blank"><img src=${pinterest} alt="Facebook"></a></li>
        </ul>
    `
}

export default Social;