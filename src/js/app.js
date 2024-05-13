const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === '') return;
    const task = document.createElement('li');
    task.classList.add('flex', 'items-center', 'p-2', 'mb-2', 'bg-white', 'rounded-lg', 'shadow-lg');
    task.innerHTML = `
        <div class="w-full">
            <p class="font-semibold">${input.value}</p>
        </div>
        <button class="p-1 rounded-full bg-red-500 text-white">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;
    taskList.appendChild(task);
    input.value = '';
    task.addEventListener('click', () => {
        task.remove();
    });
});