const taskInput = document.getElementById("task-input");
const tasklistContainer = document.getElementById("task-list-container");

const dueDateInput = document.getElementById("task-due-date");
const addTaskButton = document.getElementById("add-task-btn");
const taskCheckbox = document.getElementById("checkbox-task");
const alltask = document.getElementsByClassName("all");
const completedtask = document.getElementsByClassName("completed");
const duetasks = document.getElementsByClassName("incomplete");
// const darkModeToggle = document.getElementById("toggle-dark-mode");

// darkModeToggle.addEventListener("click",function(clr){
//  if (clr === "dark") document.body.classList.toggle("dark-mode");
//  else if (clr === "light") document.body.classList.toggle("light-mode");}
total=()=>{
if 
}
completedtask=()=>{
  if (taskInput.value === "checked" ){
  console.log("${tasklistcontainer}"); 
    }else if ( taskInput.value != ""); 
  }


 pandingtasks=()=>{
  if ( ) 
  }



function addTask() {
  if (taskInput.value === "") {
    alert("please add some task.!");
  }
   else {

    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    tasklistContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskInput.value ="";
  saveData();
}

tasklistContainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }saveData();
},false);

 saveData=()=>{
  localStorage.setItem('data', tasklistContainer.innerHTML);
}
const loadData = () => {
  const data = localStorage.getItem('data');
  if (data) {
    tasklistContainer.innerHTML = data;
  }
};

window.onload = () => {
  loadData();
};

