const students = {
    "Іван": {
        math: 10,
        physics: 9,
        english: 11
    },
    "Марія": {
        math: 12,
        physics: 11,
        english: 10
    },
    "Олег": {
        math: 8,
        physics: 7,
        english: 9
    }
};

for (let student in students) {
    const grades = Object.values(students[student]);

    const average =
        grades.reduce((sum, grade) => sum + grade, 0) /
        grades.length;

    console.log(`${student}: середній бал = ${average.toFixed(2)}`);
}
