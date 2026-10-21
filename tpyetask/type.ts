
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: tasks.length + 1,
    title: title,
    status: "todo"
  };

  const newTasks = [...tasks, newTask];
  return newTasks;
}

export function completeTask(tasks: Task[], id: number): Task[] {
  const newTasks: Task[] = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      newTasks.push({
        id: tasks[i].id,
        title: tasks[i].title,
        status: "done"
      });
    } else {
      newTasks.push(tasks[i]);
    }
  }

  return newTasks;
}

export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  const result: Task[] = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === status) {
      result.push(tasks[i]);
    }
  }

  return result;
}
