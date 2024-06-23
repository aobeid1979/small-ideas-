fetch ('https://api.github.com/users/ao')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})