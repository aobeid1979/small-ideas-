fetch ('https://randomruser.me/api/results=10')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})