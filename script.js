const nav_button_all_tasks = document.querySelector('[data-nav-button-all-tasks]');
const nav_list_project = document.querySelector('[data-nav-list-project]');
const nav_x_mark = document.querySelector('[data-nav-x-mark]');
const nav_item_input_group = document.querySelector('[data-nav-item-input-group]');
const nav_input = document.querySelector('[data-nav-input]');
const nav_button_add = document.querySelector('[data-nav-button-add]');
const nav_button_cancel = document.querySelector('[data-nav-button-cancel]');
const nav_item_add_project = document.querySelector('[data-nav-item-add-project]');

const main_section_all_tasks = document.querySelector('[data-main-section-all-task]');
const main_all_task_list = document.querySelector('[data-main-section-all-task-list]')
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

const all_tasks = [];
project_items.forEach(item => {
   item.tasks.forEach(task => {
      all_tasks.push(task)
   });
});

console.log(all_tasks);
nav_button_all_tasks.addEventListener('click', () => {
   clear(main_all_task_list);
   main_section_all_tasks.classList.remove('hidden');
   main_section_project.classList.add('hidden');
   main_project_title.innerText = 'All Tasks';
   all_tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.dataset.index = index;
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

      main_all_task_list.appendChild(li);
      console.log(index);
   });
});

function render_projects() {
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
      render_projects();
   }
});

nav_list_project.addEventListener('click', e => {
   // Nav X-Mark Logic
   if (e.target.classList.contains('fa-xmark')) {
      const project_index = e.target.parentElement.dataset.index;
      project_items.splice(project_index, 1);
      clear(nav_list_project);
      render_projects();
   }

   // Nav Button Logic
   if (e.target.classList.contains('nav__button--project')) {
      main_section_project.classList.remove('hidden');
      clear(main_project_task_list);

      const project_index = e.target.parentElement.dataset.index;
      main_project_title.innerText = project_items[project_index].project;
      main_project_title.dataset.index = project_index;

      project_items[project_index].tasks.forEach((task, index) => {
         const li = document.createElement('li');
         li.dataset.index = index;
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
});

// Main Add Task Button Logic
main_item_add_task.addEventListener('click', () => {
   main_item_input_group.classList.remove('hidden');
   main_item_add_task.classList.add('hidden');
});

// Main Cancel Button Logic
main_button_cancel.addEventListener('click', () => {
   main_item_input_group.classList.add('hidden');
   main_item_add_task.classList.remove('hidden');
});

// Main Add Button Logic
main_button_add.addEventListener('click', () => {
   if (main_input.value.trim()) {
      clear(main_project_task_list);

      const project_index = main_project_title.dataset.index;
      project_items[project_index].tasks.push(main_input.value.trim());
      main_input.value = '';

      project_items[project_index].tasks.forEach(task => {
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

      main_item_input_group.classList.add('hidden');
      main_item_add_task.classList.remove('hidden');
   }
});

main_project_task_list.addEventListener('click', e => {
   if (e.target.classList.contains('fa-square') || e.target.classList.contains('fa-square-check')) {
      e.target.classList.toggle('fa-square');
      e.target.classList.toggle('fa-square-check');
      e.target.nextElementSibling.classList.toggle('cross-out');
   }

   if (e.target.classList.contains('fa-xmark')) {
      const project_index = main_project_title.dataset.index;
      const task_index = e.target.parentElement.dataset.index;
      project_items[project_index].tasks.splice(task_index, 1);
      clear(main_project_task_list);
      project_items[project_index].tasks.forEach((task, index) => {
         const li = document.createElement('li');
         li.dataset.index = index;
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


render_projects();