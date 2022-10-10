const inputBox = document.querySelector(".inputField input"),
addBtn = document.querySelector(".inputField button"),
todoList = document.querySelector(".todoList");

inputBox.addEventListener("keyup", (e) => {
   let userData = inputBox.value;
   if (userData.trim().length) {
      addBtn.classList.add("active");
   } else {
      addBtn.classList.remove("active");
   }
});

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
   showTasks();
});

function showTasks() {
   let getLocalStorage = localStorage.getItem("New Todo");

   if (getLocalStorage == null) {
      listArr = [];
   } else {
      listArr = JSON.parse(getLocalStorage);
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

