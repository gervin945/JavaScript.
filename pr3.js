<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>Таймер</title>
</head>
<body>

<h2>Таймер зворотного відліку</h2>

<input type="number" id="seconds" placeholder="Секунди">

<button id="start">Старт</button>
<button id="pause">Пауза</button>
<button id="plus">+10 сек</button>
<button id="minus">-10 сек</button>

<h1 id="timer">0</h1>

<script>
let time = 0;
let interval = null;

const timerDisplay =
    document.getElementById("timer");

document.getElementById("start")
.addEventListener("click", () => {

    if (!interval) {

        if (time === 0) {
            time = Number(
                document.getElementById("seconds").value
            );

            if (time <= 0 || isNaN(time)) {
                alert("Введіть коректне число!");
                return;
            }
        }

        timerDisplay.textContent = time;

        interval = setInterval(() => {

            time--;
            timerDisplay.textContent = time;

            if (time <= 0) {
                clearInterval(interval);
                interval = null;
                alert("Час вийшов!");
            }

        }, 1000);
    }
});

document.getElementById("pause")
.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

document.getElementById("plus")
.addEventListener("click", () => {
    time += 10;
    timerDisplay.textContent = time;
});

document.getElementById("minus")
.addEventListener("click", () => {
    time = Math.max(0, time - 10);
    timerDisplay.textContent = time;
});
</script>

</body>
</html>
