const add = document.getElementById("add-task");
const ulelement = document.querySelector('.unordered-list-tasks');

add.addEventListener('click', function() {
    const task_input = document.getElementById('task-input').value;

    if (task_input === '') return;

    const newtask = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const button_delete = document.createElement('button');

    newtask.className = 'ordered-list-tasks';
    input.type = 'checkbox';
    input.className = 'checkbox_class';
    span.className = 'task-text';
    span.textContent = task_input;
    button_delete.className = 'delete-task';
    button_delete.textContent = '✖';

    newtask.append(input, span, button_delete);
    ulelement.append(newtask);
    document.getElementById('task-input').value = '';

    input.addEventListener('click', function() {
        if (span.classList.contains('strikethrough')) {
            span.classList.remove('strikethrough');
        } else {
            span.classList.add('strikethrough');
        }
    });

    button_delete.addEventListener('click', function() {
        newtask.remove(); 
    });
});

