document.addEventListener('DOMContentLoaded', function() {
    const addTodoButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const addSuggestionButton = document.getElementById('add-suggestion');
    const suggestionInput = document.getElementById('suggestion-input');
    const suggestionList = document.getElementById('suggestion-list');

    // Add a new task
    addTodoButton.addEventListener('click', function() {
        const newTaskText = todoInput.value.trim();
        if (newTaskText) {
            const li = document.createElement('li');
            li.innerHTML = `${newTaskText} <button class="remove-btn">Remove</button>`;
            todoList.appendChild(li);
            todoInput.value = '';

            // Add event listener for the remove button
            li.querySelector('.remove-btn').addEventListener('click', function() {
                todoList.removeChild(li);
            });
        }
    });

    // Add a new suggestion
    addSuggestionButton.addEventListener('click', function() {
        const newSuggestionText = suggestionInput.value.trim();
        if (newSuggestionText) {
            const li = document.createElement('li');
            li.textContent = newSuggestionText;
            suggestionList.appendChild(li);
            suggestionInput.value = '';
        }
    });

    // Remove tasks
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-btn')) {
            const li = event.target.parentNode;
            todoList.removeChild(li);
        }
    });
});
