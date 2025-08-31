const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const filterBtns = document.querySelectorAll(".filter-btn");

// Load tasks on startup
window.onload = loadTasks;

// Add Task
addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
});

// Add Task Function
function addTask(taskText, save = true, completed = false) {
  const li = document.createElement("li");
  li.className = "task";
  if (completed) li.classList.add("completed");

  const span = document.createElement("span");
  span.textContent = taskText;

  // ✅ Toggle complete
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // ✅ Double click to edit
  span.addEventListener("dblclick", () => {
    editTask(span);
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  if (save) saveTasks();
}

// Edit Task
function editTask(span) {
  const currentText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "edit-input";

  span.replaceWith(input);
  input.focus();

  input.addEventListener("blur", () => saveEdit(input, span));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEdit(input, span);
  });
}

function saveEdit(input, span) {
  span.textContent = input.value.trim() || "Untitled Task";
  span.addEventListener("dblclick", () => {
    editTask(span);
  });
  input.replaceWith(span);
  saveTasks();
}

// Save Tasks
function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task").forEach(task => {
    tasks.push({
      text: task.querySelector("span").textContent,
      completed: task.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTask(task.text, false, task.completed));
}

// Filter Tasks
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterTasks(btn.dataset.filter);
  });
});

function filterTasks(filter) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach(task => {
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "pending":
        task.style.display = task.classList.contains("completed") ? "none" : "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
    }
  });
}
