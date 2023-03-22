// button reference
const task_button = document.querySelector('.nav__item--tasks');
const today_button = document.querySelector('.nav__item--today');
const thisWeek_button = document.querySelector('.nav__item--this-week');
const project_button = document.querySelector('.nav__item--project');
const add_button = document.querySelector('.nav__button--add');
const cancel_button = document.querySelector('.nav__button--cancel');

// input reference
const project_input = document.querySelector('.nav__input');

// page reference
const task_page = document.querySelector('.main__section--tasks');
const today_page = document.querySelector('.main__section--today');
const thisWeek_page = document.querySelector('.main__section--this-week');
const project_page = document.querySelector('.main__section--project');

// tab switching logic for nav buttons
const nav_buttons = [task_button, today_button, thisWeek_button];
const section_pages = [task_page, today_page, thisWeek_page];

nav_buttons.forEach((button, index) => {
   button.addEventListener('click', () => {
     section_pages.forEach(page => {
       page.classList.add('hidden');
     });
 
     section_pages[index].classList.remove('hidden');
   });
 });

// tab switching logic for projects 
project_button.addEventListener('click', () => {
   project_page.classList.remove('hidden');
   thisWeek_page.classList.add('hidden');
   task_page.classList.add('hidden');
   today_page.classList.add('hidden');
});

// nav input group logic
add_button.addEventListener('click', () => {
   if (project_input.value != '') {
      console.log(project_input.value);
      project_input.value = '';
   }
});

// add project logic

// check task logic

// remove task logic

// add task logic

// due date logic