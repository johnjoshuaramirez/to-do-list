const add_project_button = document.querySelector('[data-nav-item-add-project');
const project_input_group = document.querySelector('[data-nav-item-input-group]');
const add_project_cancel_button = document.querySelector('[data-nav-button-cancel]');
const add_project_add_button = document.querySelector('[data-nav-button-add]');
const project_input = document.querySelector('[data-nav-input]');
const project_list = document.querySelector('[data-nav-list-project]');
const project_title = document.querySelector('[data-project-title]');
const task_list = document.querySelector('[data-task-list]');

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

const all_tasks = [
   'Task One',
   'Task Two',
   'Task Three',
   'Task Four'
];

add_project_button.addEventListener('click', show_project_input_group);
add_project_cancel_button.addEventListener('click', hide_project_input_group);
add_project_add_button.addEventListener('click', add_project);
project_list.addEventListener('click', remove_project);
project_list.addEventListener('click', show_project_tasks);

function show_project_input_group() {
   project_input_group.classList.remove('hidden');
   add_project_button.classList.add('hidden');
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

function show_project_tasks(e) {
   if (e.target.classList.contains('nav__button--project')) {
      const project_index = e.target.parentElement.dataset.index;
      project_title.innerText = projects[project_index].project;

      clear(task_list);

      projects[project_index].tasks.forEach(task => {
         task_list.innerHTML += `
      <li class="main__item">
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
}

render_projects();

all_tasks_button.addEventListener('click', show_all_tasks);
today_button.addEventListener('click', show_today_tasks);
this_week_button.addEventListener('click', show_this_week_tasks);
project_list.addEventListener('click', show_project_tasks);
add_task_cancel_button.addEventListener('click', hide_task_input_group);

checkbox.addEventListener('click', toggle_check);
add_task_button.addEventListener('click', show_task_input_group);
add_task_add_button.addEventListener('click', add_task);
task_xmark.addEventListener('click', remove_task);
due_date.addEventListener('click', set_due_date);




