fetch ('https://api.git')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})