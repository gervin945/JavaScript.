const names = ["Іван", "Марія", "Олександр", "Анна"];

const namesObject = {};

names.forEach(name => {
    namesObject[name] = name.length;
});

console.log(namesObject);
