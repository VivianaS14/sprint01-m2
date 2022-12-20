import { timeLeft } from "./InitTime";

const SetTimeLeft = (_totalSeconds) => {
    timeLeft.d = Math.floor(_totalSeconds / (60 * 60 * 24));
    timeLeft.h = Math.floor(_totalSeconds / (60 * 60) % 24);
    timeLeft.m = Math.floor(_totalSeconds / (60) % 60);
    timeLeft.s = Math.floor(_totalSeconds % 60);
}

export default SetTimeLeft;