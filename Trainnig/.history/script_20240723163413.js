function createPost (title, body) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            token: 'abc123'
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}

createPost('Hello', 'This is a post')

function getPostById (id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'GET',
        headers: {
            token: 'abc123'
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}


getPostById(12)  