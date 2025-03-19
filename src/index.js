document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputTask = document.getElementById('new-task-description');
    const taskText = inputTask.value.trim();

    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('p-2', 'mt-2');

    const delButton = document.createElement('button');
    delButton.textContent = 'Remove';
    delButton.classList.add('p-2', 'btn', 'btn-danger','mx-5');

    listItem.appendChild(delButton);
    document.getElementById('tasks').appendChild(listItem);

    delButton.addEventListener('click', () => listItem.remove());

    inputTask.value = '';
  });
});