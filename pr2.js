<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>Стилі тексту</title>

<style>
body {
    font-family: Arial;
    transition: 0.3s;
}

.dark {
    background: #222;
    color: white;
}

#textBlock {
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 15px;
}
</style>
</head>
<body>

<h2>Керування стилями</h2>

<label>Колір тексту:</label>
<input type="color" id="textColor">

<label>Колір фону:</label>
<input type="color" id="bgColor">

<br><br>

<label>Розмір шрифту:</label>
<input type="range" id="fontSize" min="12" max="50" value="16">
<span id="sizeValue">16</span> px

<br><br>

<button id="boldBtn">Жирний</button>
<button id="italicBtn">Курсив</button>
<button id="underlineBtn">Підкреслення</button>

<button id="toggleText">Сховати/Показати</button>
<button id="themeBtn">Light/Dark</button>
<button id="resetBtn">Скинути</button>

<div id="textBlock">
    Це демонстраційний текст.
</div>

<script>
const text = document.getElementById("textBlock");

document.getElementById("textColor")
.addEventListener("input", e => {
    text.style.color = e.target.value;
});

document.getElementById("bgColor")
.addEventListener("input", e => {
    text.style.backgroundColor = e.target.value;
});

document.getElementById("fontSize")
.addEventListener("input", e => {
    text.style.fontSize = e.target.value + "px";
    document.getElementById("sizeValue").textContent =
        e.target.value;
});

document.getElementById("boldBtn")
.addEventListener("click", () => {
    text.style.fontWeight =
        text.style.fontWeight === "bold"
        ? "normal"
        : "bold";
});

document.getElementById("italicBtn")
.addEventListener("click", () => {
    text.style.fontStyle =
        text.style.fontStyle === "italic"
        ? "normal"
        : "italic";
});

document.getElementById("underlineBtn")
.addEventListener("click", () => {
    text.style.textDecoration =
        text.style.textDecoration === "underline"
        ? "none"
        : "underline";
});

document.getElementById("toggleText")
.addEventListener("click", () => {
    text.style.display =
        text.style.display === "none"
        ? "block"
        : "none";
});

document.getElementById("themeBtn")
.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("resetBtn")
.addEventListener("click", () => {
    text.removeAttribute("style");
    document.body.classList.remove("dark");
    document.getElementById("fontSize").value = 16;
    document.getElementById("sizeValue").textContent = 16;
});
</script>

</body>
</html>
