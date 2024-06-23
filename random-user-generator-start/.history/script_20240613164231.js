fetch ('https://api.github.com/users/')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})