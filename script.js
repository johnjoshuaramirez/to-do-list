const inputBox = document.querySelector(".inputField input"),
addBtn = document.querySelector(".inputField button");

inputBox.addEventListener("keyup", (e) => {
   if (e.target.value.trim().length) {
      addBtn.classList.add("active");
   } else {
      addBtn.classList.remove("active");
   }
});