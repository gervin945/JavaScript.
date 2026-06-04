<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>Фільтр списку</title>
<style>
li {
    margin: 5px;
}
</style>
</head>
<body>

<h2>Пошук та сортування</h2>

<input type="text" id="search"
placeholder="Пошук...">

<button id="sortAlpha">
Сортувати за алфавітом
</button>

<button id="sortDate">
Сортувати за датою
</button>

<p id="message"></p>

<ul id="list"></ul>

<script>
const data = [
    { text: "Яблуко", date: new Date("2024-01-05") },
    { text: "Апельсин", date: new Date("2024-03-01") },
    { text: "Банан", date: new Date("2024-02-15") },
    { text: "Груша", date: new Date("2024-04-10") }
];

const list = document.getElementById("list");

function render(items) {

    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.text;
        list.appendChild(li);
    });

    document.getElementById("message").textContent =
        items.length === 0
        ? "Нічого не знайдено"
        : "";
}

render(data);

document.getElementById("search")
.addEventListener("input", e => {

    const value =
        e.target.value.toLowerCase();

    const filtered = data.filter(item =>
        item.text.toLowerCase()
            .includes(value)
    );

    render(filtered);
});

document.getElementById("sortAlpha")
.addEventListener("click", () => {

    const sorted = [...data].sort((a, b) =>
        a.text.localeCompare(b.text)
    );

    render(sorted);
});

document.getElementById("sortDate")
.addEventListener("click", () => {

    const sorted = [...data].sort(
        (a, b) => a.date - b.date
    );

    render(sorted);
});
</script>

</body>
</html>
