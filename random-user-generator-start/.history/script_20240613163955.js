fetch ('https://randomruser.me/api/re')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})