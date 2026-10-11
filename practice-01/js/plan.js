const days = 5;
const tasksPerDay = 3;

console.log("План задач на неделю:");

for (let day = 1; day <= days; day++) {
    console.log("День", day + ":");

    for (let task = 1; task <= tasksPerDay; task++) {
        console.log("  Задача", task);
    }
}