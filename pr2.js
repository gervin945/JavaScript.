const users = [
    { name: "Іван", age: 17 },
    { name: "Марія", age: 22 },
    { name: "Олег", age: 30 },
    { name: "Анна", age: 15 },
    { name: "Петро", age: 25 }
];

// Користувачі старше 18 років
const adults = users.filter(user => user.age > 18);

// Масив імен
const names = users.map(user => user.name);

// Середній вік
const averageAge =
    users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("Користувачі старше 18:", adults);
console.log("Імена користувачів:", names);
console.log("Середній вік:", averageAge);
