const completedTasks = 11;
const totalTasks = 20;

if (totalTasks <= 0) {
  console.log("Общее количество задач должно быть больше нуля.");
} else if (completedTasks < 0 || completedTasks > totalTasks) {
  console.log("Количество выполненных задач указано неверно.");
} else {
  const progress = (completedTasks / totalTasks) * 100;
  console.log(`Прогресс выполнения: ${progress.toFixed(0)}%`);
}