const tasklistContainer = document.getElementById("task-list-container");

// Save tasks to localStorage
const saveData = () => {
  localStorage.setItem('data', tasklistContainer.innerHTML);
};

// Load tasks from localStorage
const loadData = () => {
  const data = localStorage.getItem('data');
  if (data) {
    tasklistContainer.innerHTML = data;
  }
};

// Call loadData on page load
window.onload = () => {
  loadData();
};

// Update event listener to save data after toggling or deleting tasks
tasklistContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);
