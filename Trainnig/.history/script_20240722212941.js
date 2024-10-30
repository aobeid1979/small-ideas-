function createPost (post) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({post}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}