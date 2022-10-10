const inputBox = document.querySelector(".inputField input"),
addBtn = document.querySelector(".inputField button");

inputBox.addEventListener("keyup", (e) => {
   let userData = inputBox.value;
   if (e.target.value.trim().length) {
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
});