const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(response => response.json())
        .then(data => {
            const todos 
        })
    }

getTodos(); 
