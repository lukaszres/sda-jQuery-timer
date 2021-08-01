
class Time{
    constructor(minutes, seconds){
        this.minutes = minutes;
        this.seconds = seconds;
    }

    isEnd(){
        return this.minutes === 0 && this.seconds === 0;
    }
}

class TimeService{

    constructor() {
        this.setDefaultTime();
    }

    setTime(minutes, seconds){
        this.time.minutes = minutes;
        this.time.seconds = seconds;
        document.cookie = "minutes=" + minutes;
        document.cookie = "seconds=" + seconds;
    }

    setDefaultTime(){
        this.time = new Time();
        let cookie = document.cookie;
        if(cookie === null || cookie.length < 1) {
            this.time = new Time(5, 0);
        } else {
            let cookies = cookie.split(";");
            let minutes = 0;
            let seconds = 0;
            for(const cookie of cookies){
                let tuple = cookie.split("=");
                if(tuple[0].trim() === "minutes"){
                    minutes = tuple[1];
                } else if(tuple[0].trim() === "seconds"){
                    seconds = tuple[1];
                }
            }
            this.setTime(minutes, seconds);
        }
    }

    decreaseTime(){
        if(this.time.seconds > 0) {
            this.time.seconds--;
        } else {
            this.time.seconds = 59;
            this.time.minutes--;
        }
    }
}

class ClockService{
    constructor(){
        this.htmlId = "#timeClock";
    }

    setClock(time){
        $(this.htmlId).html(this.#getDoubleNumbers(time.minutes) + " : " + this.#getDoubleNumbers(time.seconds));
    }

    // private method
    #getDoubleNumbers(number){
        if(number.toString().length === 1){
            return "0" + number;
        } else {
            return number;
        }
    }
}

