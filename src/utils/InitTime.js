import CountTime from "./CountTime";
import SetTimeLeft from "./SetTimeLeft";

let timeLeft = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
}

const InitTime = (_totalSeconds) => {
    _totalSeconds = Math.floor((new Date('01.01.2023') - new Date()) / 1000);
    SetTimeLeft(_totalSeconds);
    let interval = setInterval(() => {
        if (_totalSeconds < 0) clearInterval(interval);
        CountTime(_totalSeconds);
    }, 1000);

}

export { InitTime, timeLeft };