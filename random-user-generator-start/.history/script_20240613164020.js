fetch ('https://randomruser.me/api/results')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})