const products = [
    { name: "Ноутбук", category: "Техніка" },
    { name: "Телефон", category: "Техніка" },
    { name: "Хліб", category: "Продукти" },
    { name: "Молоко", category: "Продукти" },
    { name: "Футболка", category: "Одяг" }
];

const groupedProducts = {};

products.forEach(product => {
    if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
    }

    groupedProducts[product.category].push(product.name);
});

console.log("Згруповані товари:");
console.log(groupedProducts);
