// button reference
const task_button = document.querySelector('.nav__item--tasks');
const today_button = document.querySelector('.nav__item--today');
const thisWeek_button = document.querySelector('.nav__item--this-week');
const project_button = document.querySelector('.nav__item--project');

// page reference
const task_page = document.querySelector('.main__section--tasks');
const today_page = document.querySelector('.main__section--today');
const thisWeek_page = document.querySelector('.main__section--this-week');
const project_page = document.querySelector('.main__section--project');

console.log(task_page);
console.log(today_page);
console.log(thisWeek_page);

task_button.addEventListener('click', () => {
   task_page.classList.remove('hidden');
   today_page.classList.add('hidden');
   thisWeek_page.classList.add('hidden');
   project_page.classList.add('hidden');
});

today_button.addEventListener('click', () => {
   today_page.classList.remove('hidden');
   task_page.classList.add('hidden');
   thisWeek_page.classList.add('hidden');
   project_page.classList.add('hidden');
});

thisWeek_button.addEventListener('click', () => {
   thisWeek_page.classList.remove('hidden');
   task_page.classList.add('hidden');
   today_page.classList.add('hidden');
   project_page.classList.add('hidden');
});

project_button.addEventListener('click', () => {
   project_page.classList.remove('hidden');
   thisWeek_page.classList.add('hidden');
   task_page.classList.add('hidden');
   today_page.classList.add('hidden');
});