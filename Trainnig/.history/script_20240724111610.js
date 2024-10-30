const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const apiUrl2= 'https://httpstat.us/'

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')
        .then(res => res.json())
        .then((data) => {
            data.forEach((todo) => 
                addTodoToDom(todo));

        })
    }
    
const getCode = () => {
    fetch(apiUrl2 + '404')
        .then(res => {
            // console.log(res.status);
            // console.log(res.ok);
            // console.log(res.statusText);
            return 
            res.status})
        .then(() => {
            console.log('success');
        })
        .catch((err) => {
            console.log('error');
        })  
    
}

getCode();

const addTodoToDom = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id);

    if(todo.completed){
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);
}

const createTodo = (e) => {e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }) // Close the fetch options object and fetch call before starting the .then() chain
    .then(res => res.json())
    .then((data) => 
        addTodoToDom(data))
};

    

const toggelCompleted = (e) => {
    if(e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    };    
}

const updateTodo = (id, completed) => {
    fetch(`${apiUrl}/${id}`, {
        method:'PUT',
        body:JSON.stringify({completed}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(res => res.json())
    .then((data) => console.log(data));
};

const deleteTodo = (e) => {
    if(e.target.classList.contains('todo')) {
        e.target.remove();
        deleteTodoFromApi(e.target.dataset.id);
    }
};

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.getElementById('todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggelCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);

}
        
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
console.log(input.value);
});

init();
