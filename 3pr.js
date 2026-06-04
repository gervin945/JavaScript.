let n = Number(prompt("Введіть число:"));

let factorial = 1;
let i = 1;

while (i <= n) {
    factorial *= i;
    i++;
}

console.log("Факторіал =", factorial);
