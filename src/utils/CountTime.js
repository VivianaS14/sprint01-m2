import { timeLeft } from "./InitTime";
import { PrintTime } from "./PrintClock";

const CountTime = (_totalSeconds) => {
    if (_totalSeconds > 0) {
        --timeLeft.s;

        if (timeLeft.m >= 0 && timeLeft.s < 0) {
            timeLeft.s = 59;
            --timeLeft.m;

            if (timeLeft.h >= 0 && timeLeft.m < 0) {
                timeLeft.m = 59;
                --timeLeft.h;

                if (timeLeft.d >= 0 && timeLeft.h < 0) {
                    timeLeft.h = 23;
                    --timeLeft.d;
                }
            }
        }
    }
    --_totalSeconds;
    PrintTime();
}

export default CountTime;