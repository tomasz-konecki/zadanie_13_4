function formatTime(totalSeconds) {
    var hours = 0,
        minutes = 0,
        seconds = 0;

    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    seconds = Math.floor(totalSeconds % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
}

exports.newTime = formatTime;