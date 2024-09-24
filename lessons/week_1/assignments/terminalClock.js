setInterval(() => {
    console.clear();
    
    let currentTime = new Date();
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    if (hours < 10) {
        hours = `0${hours}`;
    } else if (minutes < 10) {
        minutes = `0${minutes}`;
    } else if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    console.log(`${hours}:${minutes}:${seconds}`)

}, 1 * 1000)