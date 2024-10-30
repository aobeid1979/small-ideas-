function createPost (title) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}