const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 4,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 5,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 6,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

/**
 * Renders an array of task objects to their respective columns in the DOM.
 */

function renderTasks(tasks) {
  //Clear existing tasks from the columns.
  const todoColumn = document.getElementById("todo-column");
  const doingColumn = document.getElementById("doing-column");
  const doneColumn = document.getElementById("done-column");

  todoColumn.innerHTML = "";
  doingColumn.innerHTML = "";
  doneColumn.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task); //Create the task element.
    const columnElement = document.getElementById(`${task.status}-column`); //To get the correct column
  });
}
