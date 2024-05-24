// Selecionando os elementos

const addTaskInput = document.getElementById("add-task-title");
const addTaskButton = document.getElementById("add-task-button");
const addTaskForm = document.getElementById("add-task-form");
const tasksList = document.getElementById("tasks-list");

// Validando o Input

const validateInput = () => addTaskInput.value.length > 0;

const handleAddTasks = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return addTaskInput.classList.add("error");
  }

  const task = document.createElement("div");
  task.classList.add("task");

  const deleteItem = document.createElement("button");
  deleteItem.innerHTML = '<img src="./assets/remove.svg">';

  deleteItem.addEventListener("click", () =>
    handleDeleteClick(taskTitleContainer)
  );

  const handleDeleteClick = (task) => {
    task.remove();
    uptadeLocalStorage();
  };

  const taskTitleContainer = document.createElement("div");
  taskTitleContainer.classList.add("task-title-container");

  const taskTitle = document.createElement("h2");
  taskTitle.innerText = addTaskInput.value;

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  tasksList.appendChild(task);
  task.appendChild(taskTitleContainer);
  taskTitleContainer.appendChild(taskTitle);
  taskTitleContainer.appendChild(deleteItem);

  addTaskInput.value = "";

  uptadeLocalStorage();
};

function taskDone(event) {
  const elementoH2 = event.target;
  if (
    elementoH2.style.textDecoration === "line-through" &&
    elementoH2.style.color === "green"
  ) {
    elementoH2.style.textDecoration = "";
    elementoH2.style.color = "";
  } else {
    elementoH2.style.textDecoration = "line-through";
    elementoH2.style.color = "green";
  }

  uptadeLocalStorage();
}

tasksList.addEventListener("click", function (event) {
  if (event.target.tagName === "H2") {
    taskDone(event);
  }
});

const handleInputChange = () => {
  const inputIsValid = validateInput();
  if (inputIsValid) {
    return addTaskInput.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTasks());

addTaskInput.addEventListener("change", () => handleInputChange());

addTaskForm.addEventListener("submit", (event) => event.preventDefault());
