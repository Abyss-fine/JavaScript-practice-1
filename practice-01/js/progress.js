const completedTasks = 12;
const totalTasks = 10;

if (totalTasks <= 0) {
    console.log("Общее количество задач должно быть больше нуля");
} else if (completedTasks < 0 || completedTasks > totalTasks) {
    console.log("Количество выполненных задач указано неверно");
} else {
    const progress = (completedTasks / totalTasks) * 100;
    console.log("Выполнено задач:", completedTasks, "из", totalTasks);
    console.log("Прогресс:", progress + "%");
}
