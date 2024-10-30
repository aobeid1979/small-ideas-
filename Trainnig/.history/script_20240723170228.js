const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(response => response.json())
        .then(data => {
            const todos = document.getElementById('todo-list');
            data.forEach(todo => {
                const ul = document.createElement('li');
                li.textContent = todo.title;
                const li1 = document.createElement('li');
                li1.textContent = todo.completed;
                todos.appendChild(li);
                todos.appendChild(li1);
            });
        })
    }

getTodos(); 
