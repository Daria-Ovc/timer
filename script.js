//ищем в документе таймер и кнопки:
let timer = document.querySelector('#myTimer');
let playButton = document.querySelector('.playButton');
let resetButton = document.querySelector('.resetButton');

//переменные для счета часов, минут и секунд:
let hour = 0;
let min = 0;
let sec = 0;

//флажок для остановки и запуска секундомера:
let stopTimer = true;

//определение функций-слушателей:
playButton.addEventListener('click', playTimer);
resetButton.addEventListener('click', resetTimer);

function playTimer()
{
    if (stopTimer)
    {
        stopTimer = false;
        playButton.innerHTML = "Пауза";
        changeCounter();
    }
    else
    {
        stopTimer = true;
        playButton.innerHTML = "Старт";
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";

    sec = 0;
    min = 0;
    hour = 0;
    stopTimer = true;
}

//функция изменения счетчика секундомера:
function changeCounter() {
    if (!stopTimer)
    {
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        sec += 1;

        if (sec === 60)
        {
            min += 1;
            sec = 0;
        }
        if (min === 60)
        {
            hour += 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10)
            sec = "0" + sec;
        if (min < 10)
            min = "0" + min;
        if (hour < 10)
            hour = "0" + hour;

        timer.innerHTML = hour + ":" + min + ":" + sec;

        setTimeout("changeCounter()", 1000);
    }
}
