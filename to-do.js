const taskInput = document.getElementById("task-input");
const tasklistContainer = document.getElementById("task-list-container");

// const dueDateInput = document.getElementById("task-due-date");
// const addTaskButton = document.getElementById("add-task-btn");
// const taskCheckbox = document.getElementById("checkbox-task");
const alltask = document.getElementsByClassName("all");
const finished = document.getElementsByClassName("completed");
const duetasks = document.getElementsByClassName("incomplete");



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
  loadData();
}

tasklistContainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }saveData();
    loadData();
},false);
  
// const total=()=>
  // document.querySelectorAll("task-list");
  // console.log("li");

// -----

  const total = () => {
    const tasks = document.querySelectorAll("#task-list-container li");
    tasks.forEach(task => {
      task.style.display = "flex";
      // task.style.
    });saveData();
    console.log(" all tasks");
  };
  
  const completedtask = () => {
    const tasks = document.querySelectorAll("#task-list-container li");
    tasks.forEach(task => {
      if (task.classList.contains("checked")) {
        task.style.display = "flex";
      
      } else {
        task.style.display = "none";
      }
    }); saveData();
    console.log("completed tasks");
  };
  
  const pandingtasks = () => {
    const tasks = document.querySelectorAll("#task-list-container li");
    tasks.forEach(task => {
      if (!task.classList.contains("checked")) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });saveData();
    console.log(" incomplete tasks");
  };

//  const completedtask=()=>
//   document.querySelectorAll("#task-list");
//  tasklistContainer.forEach(("li") => {
//   if ()
//  });




//  const task = tasklistContainer.getElementsByTagName("li");
//  completedtask=()=>{
//   if (tasklistContainer.classList.contains("checked"){
//    console.log("")
//     }else if ( taskInput.value.classList != "checked"){
//       console.log("");
//     }
//     saveData();
//   }


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

// const darkModeToggle = document.getElementById("toggle-dark-mode");

// darkModeToggle.addEventListener("click",function(clr){
//  if (clr === "dark") document.body.classList.toggle("dark-mode");
//  else if (clr === "light") document.body.classList.toggle("light-mode");}
// total=()=>{
// if ()
// }


//  pandingtasks=()=>{
//   if ( ) 
//   }

