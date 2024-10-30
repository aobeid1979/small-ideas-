function createPost (title, body, polling) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            polling
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            token: 'abc123'
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

createPost('Hello', 'This is a post', 'true')

function getPostById (id) {
    fetch(`https://jsonplaceholder.typicode.com//${id}`, {
        method: 'GET',
        headers: {
            token: 'abc123'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}


getPostById(12)  