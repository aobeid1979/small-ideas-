fetch ('https://randomruser.me/api/res')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})