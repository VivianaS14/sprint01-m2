import { timeLeft } from "../utils/InitTime";

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const PrintTime = () => {
    days.innerText = timeLeft.d;
    hours.innerText = timeLeft.h;
    minutes.innerText = timeLeft.m;
    seconds.innerText = timeLeft.s;
}

export { PrintTime };