const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const todos = data.slice(0, 10);
            todos.forEach(todo => {
                console.log(todo);
            });
        })
        .catch(error => console.log(error));
}

