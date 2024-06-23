fetch ('https://api.github.com/users/aozora0000')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})