fetch ('https://api.github.com/users/defunkt')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})