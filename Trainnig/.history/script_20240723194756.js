const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then((data) => {
            data.forEach((todo) => 
                addTodoToDom(todo));

        })
    }
    

const addTodoToDom = (todo) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id);

    if(todo.completed){
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);
}

const createTodo = (e) => {e.preventDefault();
    const input = e.target.querySelector('input');
    console.log(input.value);

    
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.getElementById('todo-form').addEventListener('submit', createTodo);
}
        

init();

