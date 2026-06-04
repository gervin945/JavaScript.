<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<title>Список</title>
<style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    li { cursor: pointer; margin: 5px 0; }
</style>
</head>
<body>

<h2>Динамічний список</h2>

<input type="text" id="itemInput" placeholder="Введіть елемент">
<button id="addBtn">Додати</button>
<button id="sortBtn">Сортувати</button>

<ul id="list"></ul>

<script>
const input = document.getElementById("itemInput");
const list = document.getElementById("list");

document.getElementById("addBtn").addEventListener("click", () => {
    const value = input.value.trim();

    if (value === "") {
        alert("Введіть значення!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    li.addEventListener("click", () => {
        li.remove();
    });

    list.appendChild(li);
    input.value = "";
});

document.getElementById("sortBtn").addEventListener("click", () => {
    const items = [...list.querySelectorAll("li")];

    items.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );

    list.innerHTML = "";

    items.forEach(item => list.appendChild(item));
});
</script>

</body>
</html>
