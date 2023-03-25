const nav_item_all_tasks = document.querySelector('[data-nav-item-all-tasks]');
const nav_item_today = document.querySelector('[data-nav-item-today]');
const nav_item_this_week = document.querySelector('[data-nav-item-this-week]');

const nav_list_project = document.querySelector('[data-nav-list-project]');
const nav_x_mark = document.querySelector('[data-nav-x-mark]');
const nav_item_input_group = document.querySelector('[data-nav-item-input-group]');
const nav_input = document.querySelector('[data-nav-input]');
const nav_button_add = document.querySelector('[data-nav-button-add]');
const nav_button_cancel = document.querySelector('[data-nav-button-cancel]');
const nav_item_add_project = document.querySelector('[data-nav-item-add-project]');

const main_section_task = document.querySelector('[data-main-section-task]');
const main_section_project = document.querySelector('[data-main-section-project]');
const main_project_title = document.querySelector('[data-project-title]');
const main_project_task_list = document.querySelector('[data-project-task-list]');
const main_item_add_task = document.querySelector('[data-main-item-add-task]');
const main_item_input_group = document.querySelector('[data-main-item-input-group]');
const main_input = document.querySelector('[data-main-input]');
const main_button_cancel = document.querySelector('[data-main-button-cancel]');
const main_button_add = document.querySelector('[data-main-button-add]');

const project_items = [
   {
      project: 'Project One',
      tasks: ['Task One', 'Task Two']
   },
   {
      project: 'Project Two',
      tasks: ['Task Three', 'Task Four']
   },
   {
      project: 'Project Three',
      tasks: ['Task Five', 'Task Six']
   }
];

function render_project() {
   project_items.forEach((item, index) => {
      const li = document.createElement('li');
      li.dataset.index = index;
      li.classList.add('nav__item', 'nav__item--project');
      li.innerHTML = `
         <button class="nav__button nav__button--project">
            <i class="fa-solid fa-list-check"></i>${item.project}
         </button>
         <i class="fa-solid fa-xmark"></i>
      `;

      nav_list_project.appendChild(li);
   });
}

function clear(element) {
   while (element.firstChild) {
      element.removeChild(element.firstChild);
   }
}

nav_item_add_project.addEventListener('click', () => {
   nav_item_add_project.classList.add('hidden');
   nav_item_input_group.classList.remove('hidden');
});

nav_button_cancel.addEventListener('click', () => {
   nav_item_input_group.classList.add('hidden');
   nav_item_add_project.classList.remove('hidden');
});

nav_button_add.addEventListener('click', () => {
   if (nav_input.value.trim()) {
      project_items.push({ project: nav_input.value.trim(), tasks: [] });
      nav_input.value = '';
      nav_item_input_group.classList.add('hidden');
      nav_item_add_project.classList.remove('hidden');
      clear(nav_list_project);
      render_project();
   }
});

nav_list_project.addEventListener('click', e => {
   if (e.target.classList.contains('fa-xmark')) {
      const index = e.target.parentElement.dataset.index;
      project_items.splice(index, 1);
      clear(nav_list_project);
      render_project();
      console.log(project_items);
   }

   if (e.target.classList.contains('nav__button--project')) {
      // render main section with the project name and associate the add task button to the current object
      main_section_project.classList.remove('hidden');
      main_section_task.classList.add('hidden');
      clear(main_project_task_list);

      const target_index = e.target.parentElement.dataset.index;
      main_project_title.innerText = project_items[target_index].project;
      main_button_add.dataset.index = target_index;

      project_items[target_index].tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('main__item');
         li.innerHTML = `
         <div class="main__item-left">
				<i class="fa-regular fa-square"></i>
				<p class="main__text">${task}</p>
			</div>
				<div class="main__item-right">
				<p class="main__text main__text--due-date">No Due Date</p>
			</div>
			<i class="fa-solid fa-xmark"></i>
      `;
         main_project_task_list.appendChild(li);
      });
   };

   console.log(e.target);
});

main_item_add_task.addEventListener('click', () => {
   main_item_input_group.classList.remove('hidden');
   main_item_add_task.classList.add('hidden');
});

main_button_cancel.addEventListener('click', () => {
   main_item_input_group.classList.add('hidden');
   main_item_add_task.classList.remove('hidden');
});

main_button_add.addEventListener('click', () => {
   if (main_input.value.trim()) {
      clear(main_project_task_list);

      const target_index = main_button_add.dataset.index;
      console.log(target_index);

      project_items[target_index].tasks.push(main_input.value.trim());
      main_input.value = '';

      project_items[target_index].tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('main__item');
         li.innerHTML = `
         <div class="main__item-left">
            <i class="fa-regular fa-square"></i>
            <p class="main__text">${task}</p>
         </div>
            <div class="main__item-right">
            <p class="main__text main__text--due-date">No Due Date</p>
         </div>
         <i class="fa-solid fa-xmark"></i>
      `;

         main_project_task_list.appendChild(li);
      });
   }
});

render_project();