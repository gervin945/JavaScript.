const numbers = [15, 8, 23, 4, 42, 16, 9];

// Середнє арифметичне
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

// Максимальне та мінімальне значення
const max = Math.max(...numbers);
const min = Math.min(...numbers);

// Сортування
const sortedNumbers = [...numbers].sort((a, b) => a - b);

// Виведення результатів
console.log("Початковий масив:", numbers);
console.log("Середнє арифметичне:", average);
console.log("Максимальне значення:", max);
console.log("Мінімальне значення:", min);
console.log("Відсортований масив:", sortedNumbers);
