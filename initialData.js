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
 * Renders an array of task objects to their respective columns ("todo", "doing", "done").
 * 
 * @param {Array} tasks - Array of task objects with id, title, description, and status.
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

    if (columnElement) {
      columnElement.appendChild(taskElement);
    } else {
      console.warn(`No column found for status: ${task.status}`);
    }
  });
}
/**
 * Creates a DOM element representing a single task.
 * 
 * @param {Object} task - The task object containing id, title, description, and status.
 * @returns {HTMLElement} - The created task element.
 */

function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.setAttribute("data-id", task.id);

  const titleElement = document.createElement("h3");
  titleElement.textContent = task.title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = task.description;

  taskDiv.appendChild(titleElement);
  //taskDiv.appendChild(descriptionElement);

  taskDiv.addEventListener("click", () => openTaskModal(task));

  return taskDiv;
}

renderTasks(initialTasks);

/**
 * Opens the task modal with the given task's details filled in.
 * This function first fills the modal fields with the task information, then displays the modal along with the backdrop.
 * @param {Object} task - The task object containing id, title, description, and status. 
 */
function openTaskModal(task) {
  fillModalFields(task);
  showModal();
}

/**
 * Fills the modal input fields with the provided task's details.
 * @param {Object} task - Task with title, description, and status to fill the modal. 
 */

  function fillModalFields(task) {
  document.getElementById("modal-title").value = task.title;
  document.getElementById("modal-description").value = task.description;
  document.getElementById("modal-status").value = task.status;
  }

  /**
   * Displays the modal and the backdrop.
   * This function adds the "active" class to the modal and backdrop, making them visible.
   */
  function showModal() {
  document.getElementById("task-modal").classList.add("active");
  document.querySelector(".modal-backdrop").classList.add("active");
}

/**
 * closes the task modal and the backdrop.
 * This function removes the "active" class from the modal and backdrop, making them invisible.
 */

function closeModal() {
  document.getElementById("task-modal").classList.remove("active");
  document.querySelector(".modal-backdrop").classList.remove("active");
}
// Close Modal Events and Function:add event listeners for closing the modal when clicking the close button or backdrop.
document.querySelector(".close-button").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);