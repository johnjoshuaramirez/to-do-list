const add_project_button = document.querySelector('[data-nav-item-add-project');
const project_input_group = document.querySelector('[data-nav-item-input-group]');
const add_project_cancel_button = document.querySelector('[data-nav-button-cancel]');
const add_project_add_button = document.querySelector('[data-nav-button-add]');
const project_input = document.querySelector('[data-nav-input]');
const project_list = document.querySelector('[data-nav-list-project]');
const project_title = document.querySelector('[data-project-title]');
const task_list = document.querySelector('[data-task-list]');
const add_task_button = document.querySelector('[data-main-item-add-task]');
const task_input_group = document.querySelector('[data-main-item-input-group]');
const add_task_cancel_button = document.querySelector('[data-main-button-cancel]');
const add_task_add_button = document.querySelector('[data-main-button-add]');
const task_input = document.querySelector('[data-main-input]');


const projects = [
   {
      project: 'Project One',
      tasks: ['Task One', 'Task Two']
   },
   {
      project: 'Project Two',
      tasks: ['Task Three', 'Task Four']
   }
];

const all_tasks = [];

add_project_button.addEventListener('click', show_project_input_group);
add_project_cancel_button.addEventListener('click', hide_project_input_group);
add_project_add_button.addEventListener('click', add_project);
project_list.addEventListener('click', remove_project);
project_list.addEventListener('click', show_project_tasks);
add_task_button.addEventListener('click', show_task_input_group);
add_task_cancel_button.addEventListener('click', hide_task_input_group);
add_task_add_button.addEventListener('click', add_task);
task_list.addEventListener('click', remove_task);

function show_project_input_group() {
   project_input_group.classList.remove('hidden');
   add_project_button.classList.add('hidden');
   project_input.focus();
}

function hide_project_input_group() {
   project_input_group.classList.add('hidden');
   add_project_button.classList.remove('hidden');
}

function clear(element) {
   while (element.firstChild) {
      element.removeChild(element.firstChild);
   }
}

function add_project() {
   if (!project_input.value.trim()) {
      alert('Please Add Project');
      return;
   }

   projects.push({
      project: project_input.value.trim(),
      tasks: []
   });

   project_input.value = '';
   clear(project_list);
   render_projects();
}

function render_projects() {
   projects.forEach((item, index) => {
      project_list.innerHTML += `
      <li class="nav__item nav__item--project" data-index='${index}'>
			<button class="nav__button nav__button--project">
			   <i class="fa-solid fa-list-check"></i>${item.project}
			</button>
			<i class="fa-solid fa-xmark" data-nav-x-mark></i>
		</li>`;
   });
}

function remove_project(e) {
   if (e.target.classList.contains('fa-xmark')) {
      const project_index = e.target.parentElement.dataset.index;
      projects.splice(project_index, 1);
      clear(project_list);
      render_projects();
   }
}

function render_tasks(project_index) {
   projects[project_index].tasks.forEach((task, index) => {
      task_list.innerHTML += `
      <li class="main__item" data-index='${index}'>
         <div class="main__item-left">
            <i class="fa-regular fa-square"></i>
            <p class="main__text">${task}</p>
         </div>
         <div class="main__item-right">
            <p class="main__text main__text--due-date">No Due Date</p>
         </div>
         <i class="fa-solid fa-xmark"></i>
      </li>
   `;
   });
}

function show_project_tasks(e) {
   if (e.target.classList.contains('nav__button--project')) {
      const project_index = e.target.parentElement.dataset.index;
      project_title.innerText = projects[project_index].project;
      project_title.dataset.index = project_index;

      clear(task_list);
      render_tasks(project_index);
   }
}

function show_task_input_group() {
   task_input_group.classList.remove('hidden');
   add_task_button.classList.add('hidden');
   task_input.focus();
}

function hide_task_input_group() {
   task_input_group.classList.add('hidden');
   add_task_button.classList.remove('hidden');
}

function add_task() {
   if (!task_input.value.trim()) {
      alert('Please Add Task');
      return;
   }

   const project_index = project_title.dataset.index;
   projects[project_index].tasks.push(task_input.value.trim());
   all_tasks.push(task_input.value.trim());

   clear(task_list);
   render_tasks(project_index);
   hide_task_input_group();
   task_input.value = '';
}

function remove_task(e) {
   if (e.target.classList.contains('fa-xmark')) {
      const project_index = project_title.dataset.index;
      const task_index = e.target.parentElement.dataset.index;
      projects[project_index].tasks.splice(task_index, 1);
      clear(task_list);
      render_tasks(project_index);
   }
}

function show_all_tasks() {
   task_list.innerHTML += ``;
   task_list.appendChild
}

render_projects();

all_tasks_button.addEventListener('click', show_all_tasks);
today_button.addEventListener('click', show_today_tasks);
this_week_button.addEventListener('click', show_this_week_tasks);

checkbox.addEventListener('click', toggle_check);
due_date.addEventListener('click', set_due_date);




