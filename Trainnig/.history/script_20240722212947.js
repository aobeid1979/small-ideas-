function createPost (post) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: post.userId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}