const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(response => response.json())
        .then(data => {
            const todos = document.getElementById('todo-list');
            data.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.title;
                const poling = document.createElement('div');
                div.textContent = todo.completed;
                todos.appendChild(li);
            });
        })
    }

getTodos(); 
