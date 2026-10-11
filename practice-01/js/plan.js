const totalTasks = 20;
const dailyLimit = 6;

let remainingTasks = totalTasks;
let day = 1;

while (remainingTasks > 0) {
  const tasksToday = Math.min(remainingTasks, dailyLimit);

  console.log(`День ${day}: выполнить ${tasksToday} задач`);

  remainingTasks -= tasksToday;
  day++;
}