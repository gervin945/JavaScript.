let x = Number(prompt("Введіть x:"));
let y = Number(prompt("Введіть y:"));
let z = Number(prompt("Введіть z:"));

// 1. Найбільше та найменше число
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

// 2. Перевірка парності хоча б одного числа
let hasEven = (x % 2 === 0) || (y % 2 === 0) || (z % 2 === 0);

console.log("Хоча б одне число парне:", hasEven);

// 3. Складна умова
let condition = (x > y) && (y < z);

console.log("Результат умови:", condition);

// 4. Перевірка простого числа
let number = Number(prompt("Введіть число для перевірки на простоту:"));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " є простим числом");
} else {
    console.log(number + " не є простим числом");
}
