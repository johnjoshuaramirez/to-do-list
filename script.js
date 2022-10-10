const inputBox = document.querySelector(".inputField input"),
addBtn = document.querySelector(".inputField button"),
todoList = document.querySelector(".todoList"),
deleteAllBtn = document.querySelector(".footer button");

inputBox.addEventListener("keyup", () => {
   let userData = inputBox.value;
   if (userData != 0) {
      addBtn.classList.add("active");
   } else {
      addBtn.classList.remove("active");
   }
});

showTasks();

addBtn.addEventListener("click", () => {
   let userData = inputBox.value;
   let getLocalStorage = localStorage.getItem("New Todo");
   if (getLocalStorage === null) {
      listArr = [];
   } else {
      listArr = JSON.parse(getLocalStorage);
   }
   listArr.push(userData);
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   addBtn.classList.remove("active");
   showTasks();
});

function showTasks() {
   let getLocalStorage = localStorage.getItem("New Todo");
   if (getLocalStorage == null) {
      listArr = [];
   } else {
      listArr = JSON.parse(getLocalStorage);
   }

   const pending = document.querySelector(".pending");
   pending.textContent = listArr.length;

   if (listArr.length > 0) {
      deleteAllBtn.classList.add("active");
   } else {
      deleteAllBtn.classList.remove("active");
   }
   
   let li = "";
   listArr.forEach((element, index) => {
      li += `<li>${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
   });
   todoList.innerHTML = li;
   inputBox.value = "";
}

function deleteTask(index) {
   let getLocalStorage = localStorage.getItem("New Todo");
   listArr = JSON.parse(getLocalStorage);
   listArr.splice(index, 1);
   localStorage.setItem("New Todo", JSON.stringify(listArr));

   showTasks();
}

deleteAllBtn.onclick = () => {
   listArr = [];
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   showTasks();
}

